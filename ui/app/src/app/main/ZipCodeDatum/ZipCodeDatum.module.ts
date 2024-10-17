import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ZIPCODEDATUM_MODULE_DECLARATIONS, ZipCodeDatumRoutingModule} from  './ZipCodeDatum-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ZipCodeDatumRoutingModule
  ],
  declarations: ZIPCODEDATUM_MODULE_DECLARATIONS,
  exports: ZIPCODEDATUM_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZipCodeDatumModule { }