import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SocialUser } from 'angularx-social-login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplicationsService } from 'src/app/service/applications.service';
import { CategoryModel } from 'src/app/models/category.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rigister-product',
  templateUrl: './rigister-product.component.html',
  styleUrls: ['./rigister-product.component.scss']
})
export class RigisterProductComponent implements OnInit {
  formGroup: FormGroup;
  categorys: CategoryModel;
  subscription = new Subscription();

  introduces: CategoryModel;
  constructor(
    public dialogRef: MatDialogRef<RigisterProductComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: SocialUser,
    private fb: FormBuilder,
    private applicationService: ApplicationsService,
  ) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      product: ['', [Validators.required]],
      introduce: ['', [Validators.required]],
      isPartner: [false]
    });
  }

  ngOnInit(): void {
    this.applicationService.getCategory().subscribe((response: any) => {
      this.categorys = response.categorys;
      this.introduces = response.introduce;
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }

    const data = {
      name: this.formGroup.controls.name.value,
      email: this.formGroup.controls.email.value,
      phone: this.formGroup.controls.phone.value,
      product: this.formGroup.controls.product.value,
      introduce: this.formGroup.controls.introduce.value,
      isPartner: this.formGroup.controls.isPartner.value,
    };

    localStorage.setItem('register-product', JSON.stringify(data));
    this.dialogRef.close(true);
  }

}
