import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocialLoginModule, FacebookLoginProvider } from 'angularx-social-login';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ListApplicationModule } from './page/applications/list-application.module';
import { FacebookModule } from 'ngx-facebook';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthLoginService } from './service/auth-login.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApplicationsService } from './service/applications.service';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    ListApplicationModule,
    FacebookModule.forRoot(),
    EffectsModule.forRoot([]),
    FontAwesomeModule,
    CoreModule,
    StoreModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('291731522139209'),
          }
        ]
      }
    },
    AuthGuardService,
    AuthLoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApplicationsService,
      multi: true
    },
    ApplicationsService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, faBriefcase);
  }
}
