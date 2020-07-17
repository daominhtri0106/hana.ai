import { createAction, props, ActionType } from '@ngrx/store';
import { SocialUser } from 'angularx-social-login';

export const GET_USER = '@Login/GetUser';
export const CLEAR_USER = '@Login/ClearUser';
// export const GET_POSTS_SUCCESS = '@Post/GetAllSuccess';

export const getUser = createAction(GET_USER, props<{ user: SocialUser }>());
export const clearUser = createAction(CLEAR_USER);

export type LoginActions =
    ActionType<typeof getUser>
    | ActionType<typeof clearUser>;
