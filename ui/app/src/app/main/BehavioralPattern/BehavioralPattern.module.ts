import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BEHAVIORALPATTERN_MODULE_DECLARATIONS, BehavioralPatternRoutingModule} from  './BehavioralPattern-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BehavioralPatternRoutingModule
  ],
  declarations: BEHAVIORALPATTERN_MODULE_DECLARATIONS,
  exports: BEHAVIORALPATTERN_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BehavioralPatternModule { }