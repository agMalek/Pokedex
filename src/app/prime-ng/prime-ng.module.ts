import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports:[
    ButtonModule,
    CardModule,
    CheckboxModule,
    FieldsetModule,
    InputTextModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    CheckboxModule,
    FieldsetModule,
    InputTextModule
  ]
})
export class PrimeNGModule { }
