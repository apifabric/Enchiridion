import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERINTERACTION_MODULE_DECLARATIONS, UserInteractionRoutingModule} from  './UserInteraction-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserInteractionRoutingModule
  ],
  declarations: USERINTERACTION_MODULE_DECLARATIONS,
  exports: USERINTERACTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserInteractionModule { }