import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessHomeComponent } from './home/Business-home.component';
import { BusinessNewComponent } from './new/Business-new.component';
import { BusinessDetailComponent } from './detail/Business-detail.component';

const routes: Routes = [
  {path: '', component: BusinessHomeComponent},
  { path: 'new', component: BusinessNewComponent },
  { path: ':id', component: BusinessDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Business-detail-permissions'
      }
    }
  },{
    path: ':business_id/BusinessInsight', loadChildren: () => import('../BusinessInsight/BusinessInsight.module').then(m => m.BusinessInsightModule),
    data: {
        oPermission: {
            permissionId: 'BusinessInsight-detail-permissions'
        }
    }
}
];

export const BUSINESS_MODULE_DECLARATIONS = [
    BusinessHomeComponent,
    BusinessNewComponent,
    BusinessDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }