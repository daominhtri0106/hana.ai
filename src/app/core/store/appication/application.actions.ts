import { createAction, props, ActionType } from '@ngrx/store';
import { ApplicationModel } from 'src/app/models/application.model';


export const GET_APPLICATION = '@Application/GetApplication';
export const GET_APPLICATION_SUCCESS = '@Application/GetApplicationSuccess';
export const GET_APPLICATION_ERROR = '@Application/GetApplicationError';

export const ADD_APPLICATION = '@Application/AddApplication';
export const UPDATE_APPLICATION = '@Application/UpdateApplication';
export const DELETE_APPLICATION = '@Application/DeleteApplication';

export const CLEAR_APPLICATION = '@Application/ClearApplication';

export const getApplication = createAction(GET_APPLICATION);
export const getApplicationSuccess = createAction(GET_APPLICATION_SUCCESS, props<{ applications: ApplicationModel[] }>());
export const getApplicationError = createAction(GET_APPLICATION_ERROR, props<{ error }>());

export const addApplication = createAction(ADD_APPLICATION, props<{ application: ApplicationModel }>());
export const updateApplication = createAction(UPDATE_APPLICATION, props<{ application: ApplicationModel }>());
export const deleteApplication = createAction(DELETE_APPLICATION, props<{ application: ApplicationModel }>());

export const clearApplication = createAction(CLEAR_APPLICATION);

export type ApplicationActions =
    ActionType<typeof getApplication>
    | ActionType<typeof getApplicationSuccess>
    | ActionType<typeof getApplicationError>
    | ActionType<typeof addApplication>
    | ActionType<typeof updateApplication>
    | ActionType<typeof clearApplication>;
