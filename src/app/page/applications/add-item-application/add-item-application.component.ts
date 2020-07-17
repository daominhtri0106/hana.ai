import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ApplicationModel } from 'src/app/models/application.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { addApplication, updateApplication } from 'src/app/core/store/appication/application.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { horizontalPosition, verticalPosition } from 'src/app/shared/constant';

@Component({
  selector: 'app-add-item-application',
  templateUrl: './add-item-application.component.html',
  styleUrls: ['./add-item-application.component.scss']
})
export class AddItemApplicationComponent implements OnChanges {

  @Input() caseCondition: 'add' | 'edit';
  @Input() data: ApplicationModel;
  @Output() exit = new EventEmitter<boolean>();


  formGroup: FormGroup;

  isSaveDisable = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private snackBar: MatSnackBar
  ) {
    this.formGroup = this.fb.group({
      nameApplication: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.formGroup.patchValue({
      nameApplication: this.data?.name,
    });
  }

  onExit() {
    this.exit.emit(true);
  }

  onSubmit() {
    console.log(this.formGroup);
    if (this.caseCondition === 'add') {
      this.addApplication();
      return;
    }
    this.editApplication();
  }

  addApplication() {
    const id = new Date().getTime();
    const data: ApplicationModel = {
      id,
      name: this.formGroup.controls.nameApplication.value,
    };
    this.store.dispatch(addApplication({ application: data }));
    this.formGroup.controls.nameApplication.reset();
    this.exit.emit(true);

    this.openSnackBar('Chúc mừng bạn thêm thành công!', 'x');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition,
      verticalPosition,
      panelClass: ['green-snackbar']
    });
  }


  editApplication() {
    const data: ApplicationModel = {
      id: this.data.id,
      name: this.formGroup.controls.nameApplication.value,
    };
    this.store.dispatch(updateApplication({ application: data }));
    this.exit.emit(true);
    this.openSnackBar('Chúc mừng bạn sữa thành công!', 'x');
  }
}
