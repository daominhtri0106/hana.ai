import { ApplicationState } from './application.state';
import { createReducer, on } from '@ngrx/store';
import * as ApplicationActions from './application.actions';

const initialState: ApplicationState = {
    applications: [],
    status: false,
};

const getApplicationReducer = createReducer(
    initialState,
    on(ApplicationActions.getApplication, (state) => ({
        ...state,
        status: true,
    })),
    on(ApplicationActions.getApplicationSuccess, (state, actions) => ({
        ...state,
        status: false,
        applications: actions.applications
    })),
    on(ApplicationActions.addApplication, (state, actions) => ({
        ...state,
        status: false,
        applications: [...state.applications, actions.application]
    })),
    on(ApplicationActions.updateApplication, (state, actions) => ({
        ...state,
        status: false,
        applications: [...state.applications.map((item) => {
            if (item.id === actions.application.id) {
                item = actions.application;
            }
            return item;
        })]
    })),
    on(ApplicationActions.deleteApplication, (state, actions) => ({
        ...state,
        status: false,
        applications: [...state.applications.filter((item) =>
            item.id !== actions.application.id)]
    })),
    on(ApplicationActions.clearApplication, (state) => ({
        ...state,
        status: false,
        applications: []
    })),
);


export function ApplicationRuducer(
    state: ApplicationState = initialState,
    actions: ApplicationActions.ApplicationActions) {
    return getApplicationReducer(state, actions);
}
