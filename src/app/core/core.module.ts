import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserRuducer } from './store/login/login.reducer';
import { ApplicationRuducer } from './store/appication/application.reducer';
import { ApplicationEffects } from './store/appication/application.effect';

@NgModule({
  imports: [
    StoreModule.forFeature('feature_login', UserRuducer),
    StoreModule.forFeature('feature_application', ApplicationRuducer),
    EffectsModule.forFeature([ApplicationEffects]),
  ]
})

export class CoreModule { }
