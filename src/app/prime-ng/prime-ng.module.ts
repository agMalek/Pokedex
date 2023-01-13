import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  imports:[
    ButtonModule,
    CardModule,
    CheckboxModule,
    FieldsetModule,
    InputTextModule,
    RadioButtonModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    CheckboxModule,
    FieldsetModule,
    InputTextModule,
    RadioButtonModule
  ]
})
export class PrimeNGModule { }
