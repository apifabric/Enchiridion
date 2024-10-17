import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BUSINESSINSIGHT_MODULE_DECLARATIONS, BusinessInsightRoutingModule} from  './BusinessInsight-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BusinessInsightRoutingModule
  ],
  declarations: BUSINESSINSIGHT_MODULE_DECLARATIONS,
  exports: BUSINESSINSIGHT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BusinessInsightModule { }