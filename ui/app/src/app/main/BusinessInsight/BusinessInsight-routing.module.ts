import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessInsightHomeComponent } from './home/BusinessInsight-home.component';
import { BusinessInsightNewComponent } from './new/BusinessInsight-new.component';
import { BusinessInsightDetailComponent } from './detail/BusinessInsight-detail.component';

const routes: Routes = [
  {path: '', component: BusinessInsightHomeComponent},
  { path: 'new', component: BusinessInsightNewComponent },
  { path: ':id', component: BusinessInsightDetailComponent,
    data: {
      oPermission: {
        permissionId: 'BusinessInsight-detail-permissions'
      }
    }
  }
];

export const BUSINESSINSIGHT_MODULE_DECLARATIONS = [
    BusinessInsightHomeComponent,
    BusinessInsightNewComponent,
    BusinessInsightDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessInsightRoutingModule { }