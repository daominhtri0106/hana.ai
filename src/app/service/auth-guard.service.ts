import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SocialUser } from 'angularx-social-login';
import { AppState } from '../core/store/app.state';
import { Store } from '@ngrx/store';
import { getUser } from '../core/store/login/login.actions';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private store: Store<AppState>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        const localUser = localStorage.getItem('user-profile');
        const user = JSON.parse(localUser) as SocialUser;
        if (user != null) {
            const { authToken = '' } = user;
            if (authToken.length > 0) {
                this.store.dispatch(getUser({ user }));
                return true;
            }
        }

        this.router.navigate(['login']);

        return false;
    }

}
