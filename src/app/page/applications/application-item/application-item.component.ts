import { Component, OnInit, Input } from '@angular/core';
import { ApplicationModel } from 'src/app/models/application.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { deleteApplication } from 'src/app/core/store/appication/application.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { horizontalPosition, verticalPosition } from 'src/app/shared/constant';


@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.scss']
})
export class ApplicationItemComponent implements OnInit {

  isShowEdit = false;
  @Input() data: ApplicationModel;

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  edit() {
    this.isShowEdit = true;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition,
      verticalPosition,
      panelClass: ['green-snackbar']
    });
  }


  delete() {
    this.store.dispatch(deleteApplication({ application: this.data }));
    this.openSnackBar('Chúc mừng bạn xóa thành công', 'x');
  }

  onExit(value) {
    this.isShowEdit = false;
  }

}
