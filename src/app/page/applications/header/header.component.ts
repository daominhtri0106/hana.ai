import { Component, OnInit, Input } from '@angular/core';
import { AppState } from 'src/app/core/store/app.state';
import { Store } from '@ngrx/store';
import { clearUser } from 'src/app/core/store/login/login.actions';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() urlAvatar: string;

  constructor(private store: Store<AppState>, private router: Router, private authService: SocialAuthService) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('user-profile');
    this.authService.signOut();
    this.store.dispatch(clearUser());
    this.router.navigate(['login']);
  }

}
