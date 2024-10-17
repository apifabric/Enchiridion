import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PREFERENCECATEGORY_MODULE_DECLARATIONS, PreferenceCategoryRoutingModule} from  './PreferenceCategory-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PreferenceCategoryRoutingModule
  ],
  declarations: PREFERENCECATEGORY_MODULE_DECLARATIONS,
  exports: PREFERENCECATEGORY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PreferenceCategoryModule { }