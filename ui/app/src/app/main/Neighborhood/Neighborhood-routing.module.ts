import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeighborhoodHomeComponent } from './home/Neighborhood-home.component';
import { NeighborhoodNewComponent } from './new/Neighborhood-new.component';
import { NeighborhoodDetailComponent } from './detail/Neighborhood-detail.component';

const routes: Routes = [
  {path: '', component: NeighborhoodHomeComponent},
  { path: 'new', component: NeighborhoodNewComponent },
  { path: ':id', component: NeighborhoodDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Neighborhood-detail-permissions'
      }
    }
  },{
    path: ':neighborhood_id/Event', loadChildren: () => import('../Event/Event.module').then(m => m.EventModule),
    data: {
        oPermission: {
            permissionId: 'Event-detail-permissions'
        }
    }
},{
    path: ':neighborhood_id/Insight', loadChildren: () => import('../Insight/Insight.module').then(m => m.InsightModule),
    data: {
        oPermission: {
            permissionId: 'Insight-detail-permissions'
        }
    }
}
];

export const NEIGHBORHOOD_MODULE_DECLARATIONS = [
    NeighborhoodHomeComponent,
    NeighborhoodNewComponent,
    NeighborhoodDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeighborhoodRoutingModule { }