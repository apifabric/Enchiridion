import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {NEIGHBORHOOD_MODULE_DECLARATIONS, NeighborhoodRoutingModule} from  './Neighborhood-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    NeighborhoodRoutingModule
  ],
  declarations: NEIGHBORHOOD_MODULE_DECLARATIONS,
  exports: NEIGHBORHOOD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NeighborhoodModule { }