import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightHomeComponent } from './home/Insight-home.component';
import { InsightNewComponent } from './new/Insight-new.component';
import { InsightDetailComponent } from './detail/Insight-detail.component';

const routes: Routes = [
  {path: '', component: InsightHomeComponent},
  { path: 'new', component: InsightNewComponent },
  { path: ':id', component: InsightDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Insight-detail-permissions'
      }
    }
  },{
    path: ':insight_id/BusinessInsight', loadChildren: () => import('../BusinessInsight/BusinessInsight.module').then(m => m.BusinessInsightModule),
    data: {
        oPermission: {
            permissionId: 'BusinessInsight-detail-permissions'
        }
    }
}
];

export const INSIGHT_MODULE_DECLARATIONS = [
    InsightHomeComponent,
    InsightNewComponent,
    InsightDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightRoutingModule { }