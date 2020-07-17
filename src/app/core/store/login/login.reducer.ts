import { LoginState } from './login.state';
import { createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';

const initialState: LoginState = {
    user: {
        provider: '',
        id: '',
        email: '',
        name: '',
        photoUrl: '',
        firstName: '',
        lastName: '',
        authToken: '',
        idToken: '',
        authorizationCode: '',
    }
};

const getUserReducer = createReducer(
    initialState,
    on(LoginActions.getUser, (state, actions) => ({
        ...state,
        user: actions.user,
    })),
    on(LoginActions.clearUser, (state) => ({
        ...state,
        user: null,
    })),
    // on(PostActions.getPostsSuccess, (state, actions) => ({
    //     ...state, status: 'idle', items: actions.posts, error: '',
    // })),
    // on(PostActions.getPostsFailed, (state, actions) => ({
    //     ...state, status: 'idle', items: [], error: actions.error,
    // })),
    // on(PostActions.getPost, state => ({
    //     ...state, status: 'loading',
    // })),
    // on(PostActions.getPostSuccess, (state, actions) => ({
    //     ...state, status: 'idle', currentItem: actions.post, error: '',
    // })),
    // on(PostActions.getPostFailed, (state, actions) => ({
    //     ...state, status: 'idle', items: [], error: actions.error,
    // })),

);


export function UserRuducer(
    state: LoginState = initialState,
    actions: LoginActions.LoginActions) {
    return getUserReducer(state, actions);
}
