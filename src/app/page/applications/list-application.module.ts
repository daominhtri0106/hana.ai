import { NgModule, CUSTOM_ELEMENTS_SCHEMA, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { ListApplicationRoutingModule } from './list-application-routing.module';
import { ManagerApplicationComponent } from './manager-application/manager-application.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SearchApplicationComponent } from './search-application/search-application.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { ApplicationItemComponent } from './application-item/application-item.component';
import { AddItemApplicationComponent } from './add-item-application/add-item-application.component';
import { MatPaginatorModule, MatPaginatorIntl, MatPaginatorDefaultOptions } from '@angular/material/paginator';
import { MatPaginatorIntlCro } from './customize.pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollContainerDirective } from 'src/app/shared/directives/scroll-container.directive';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { RigisterProductComponent } from 'src/app/shared/components/rigister-product/rigister-product.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EyeGuildeComponent } from 'src/app/shared/components/eye-guilde/eye-guilde.component';
import { MatStepperModule } from '@angular/material/stepper';
import { AddApplicationAddComponent } from './add-application/add-application.component';
import { SafePipe } from 'src/app/shared/pipes/safe.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    HeaderComponent,
    ManagerApplicationComponent,
    SearchApplicationComponent,
    AddApplicationAddComponent,
    ApplicationItemComponent,
    AddItemApplicationComponent,
    ScrollContainerDirective,
    RigisterProductComponent,
    EyeGuildeComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    ListApplicationRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatSnackBarModule
  ],
  exports: [
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro },
  ],
})
export class ListApplicationModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, faBriefcase);
  }
}
