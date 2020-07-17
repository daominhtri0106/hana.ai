import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApplicationsService } from 'src/app/service/applications.service';
import * as applicationActions from './application.actions';
import { ApplicationModel } from 'src/app/models/application.model';

@Injectable()
export class ApplicationEffects {

    loadPost$ = createEffect(() => this.actions$.pipe(
        ofType(applicationActions.getApplication),
        mergeMap(() => this.applicationService.getApps()),
        map((response: any) => applicationActions.getApplicationSuccess({ applications: response?.apps as ApplicationModel[] })),
        catchError(error => of(applicationActions.getApplicationError({ error }))
        )));

    constructor(
        private actions$: Actions,
        private applicationService: ApplicationsService
    ) { }
}
