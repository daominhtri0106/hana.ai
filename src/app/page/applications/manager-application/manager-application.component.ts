import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { userSelector } from 'src/app/core/store/login/login.selector';
import { SocialUser } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { ApplicationModel } from 'src/app/models/application.model';
import { finalize } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { RigisterProductComponent } from 'src/app/shared/components/rigister-product/rigister-product.component';
import { EyeGuildeComponent } from 'src/app/shared/components/eye-guilde/eye-guilde.component';
import { getApplication } from 'src/app/core/store/appication/application.actions';
import { applicationSelector } from 'src/app/core/store/appication/application.selector';
import { ApplicationState } from 'src/app/core/store/appication/application.state';

@Component({
  selector: 'app-manager-application',
  templateUrl: './manager-application.component.html',
  styleUrls: ['./manager-application.component.scss'],
})
export class ManagerApplicationComponent implements OnInit, OnDestroy {
  user: SocialUser;
  applications: ApplicationModel[] = [];
  applicationsSplit: ApplicationModel[];
  subscription = new Subscription();
  pageSize = 10;
  currentPage = 0;
  showProgressBar = false;
  lengthPagination = 0;

  searchValue = '';

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getApplication());
    const getUser$ = this.store.select(userSelector).subscribe((user) => {
      this.user = { ...user };
    });

    const isHasDataRegister = localStorage.getItem('register-product');
    if (isHasDataRegister === null || !isHasDataRegister.length) {
      this.openDialogRegister();
    }

    this.showProgressBar = true;
    const application$ = this.store.select(applicationSelector).pipe(
      finalize(() => {
        this.showProgressBar = false;
      })
    ).subscribe((response: ApplicationState) => {
      this.showProgressBar = response.status;
      this.applications = response?.applications || [];
      this.lengthPagination = this.applications.length;

      this.setPaginator();
    });

    this.subscription
      .add(getUser$)
      .add(application$);
  }

  setPaginator() {
    const startIndex = this.currentPage * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    this.lengthPagination = this.applications.length;
    if (endIndex > this.lengthPagination) {
      endIndex = this.lengthPagination;
    }
    this.applicationsSplit = [...this.applications.slice(startIndex, endIndex)];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onPage(value) {
    this.currentPage = value.pageIndex;
    this.pageSize = value.pageSize;
    this.onSearch(this.searchValue);
  }

  onSearch(value: string = '') {
    this.searchValue = value;
    let applicationSearch = [];
    if (value.trim().length) {
      const startIndex = this.currentPage * this.pageSize;
      let endIndex = startIndex + this.pageSize;
      applicationSearch = [...this.applications.filter((item) => item.name?.toLowerCase().startsWith(value?.toLowerCase()))];
      this.lengthPagination = applicationSearch.length;
      if (endIndex > this.lengthPagination) {
        endIndex = this.lengthPagination;
      }
      this.applicationsSplit = [...applicationSearch.slice(startIndex, endIndex)];
      return;
    }
    this.setPaginator();
  }

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(RigisterProductComponent, {
      width: '450px',
      data: { ...this.user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openDialogEyeGuilde();
      }
    });
  }

  openDialogEyeGuilde(): void {
    this.dialog.open(EyeGuildeComponent, {
      width: '550px',
      data: { ...this.user }
    });
  }

}
