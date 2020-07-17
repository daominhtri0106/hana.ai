import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicationState } from './application.state';

const featureApplication = createFeatureSelector<ApplicationState>('feature_application');

export const applicationSelector = createSelector(featureApplication, state => state);



