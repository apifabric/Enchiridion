import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ZIPCODEREPORT_MODULE_DECLARATIONS, ZipCodeReportRoutingModule} from  './ZipCodeReport-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ZipCodeReportRoutingModule
  ],
  declarations: ZIPCODEREPORT_MODULE_DECLARATIONS,
  exports: ZIPCODEREPORT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZipCodeReportModule { }