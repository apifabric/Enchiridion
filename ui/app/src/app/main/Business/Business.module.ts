import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BUSINESS_MODULE_DECLARATIONS, BusinessRoutingModule} from  './Business-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BusinessRoutingModule
  ],
  declarations: BUSINESS_MODULE_DECLARATIONS,
  exports: BUSINESS_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BusinessModule { }