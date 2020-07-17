import { LoginState } from './login/login.state';
import { ApplicationState } from './appication/application.state';

export interface AppState {
    feature_login: LoginState;
    feature_application: ApplicationState;
}
