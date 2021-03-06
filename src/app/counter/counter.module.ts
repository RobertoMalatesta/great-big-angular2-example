import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { routing } from './counter.routing';
import { SharedModule } from '../shared/shared.module';
import { RioCounterComponent } from './counter.component';
import { RioCounterPage } from './counter.page';

@NgModule({
  declarations: [
    RioCounterPage,
    RioCounterComponent,
 //   FormControl
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    routing
  ]
})
export class CounterModule { }
