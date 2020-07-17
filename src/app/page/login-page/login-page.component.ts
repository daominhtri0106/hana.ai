import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { getUser } from 'src/app/core/store/login/login.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  showProgressBar = false;

  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private store: Store<AppState>,
  ) { }


  ngOnInit(): void {
  }

  signIn(): void {
    const fbLoginOptions = {
      scope: 'pages_messaging,public_profile,email,pages_show_list'
    };

    this.showProgressBar = true;
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions).then((user) => {
      if (user != null) {
        this.store.dispatch(getUser({ user }));
        localStorage.setItem('user-profile', JSON.stringify(user));
        this.router.navigate(['dashboard']);
        return;
      }
      this.router.navigate(['login']);
    }).finally(() => {
      this.showProgressBar = false;
    });
  }

}
