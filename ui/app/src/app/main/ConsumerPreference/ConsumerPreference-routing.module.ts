import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerPreferenceHomeComponent } from './home/ConsumerPreference-home.component';
import { ConsumerPreferenceNewComponent } from './new/ConsumerPreference-new.component';
import { ConsumerPreferenceDetailComponent } from './detail/ConsumerPreference-detail.component';

const routes: Routes = [
  {path: '', component: ConsumerPreferenceHomeComponent},
  { path: 'new', component: ConsumerPreferenceNewComponent },
  { path: ':id', component: ConsumerPreferenceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ConsumerPreference-detail-permissions'
      }
    }
  }
];

export const CONSUMERPREFERENCE_MODULE_DECLARATIONS = [
    ConsumerPreferenceHomeComponent,
    ConsumerPreferenceNewComponent,
    ConsumerPreferenceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerPreferenceRoutingModule { }