import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INSIGHT_MODULE_DECLARATIONS, InsightRoutingModule} from  './Insight-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InsightRoutingModule
  ],
  declarations: INSIGHT_MODULE_DECLARATIONS,
  exports: INSIGHT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InsightModule { }