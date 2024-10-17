import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/ConsumerPreference', loadChildren: () => import('../ConsumerPreference/ConsumerPreference.module').then(m => m.ConsumerPreferenceModule),
    data: {
        oPermission: {
            permissionId: 'ConsumerPreference-detail-permissions'
        }
    }
},{
    path: ':user_id/Report', loadChildren: () => import('../Report/Report.module').then(m => m.ReportModule),
    data: {
        oPermission: {
            permissionId: 'Report-detail-permissions'
        }
    }
},{
    path: ':user_id/Story', loadChildren: () => import('../Story/Story.module').then(m => m.StoryModule),
    data: {
        oPermission: {
            permissionId: 'Story-detail-permissions'
        }
    }
},{
    path: ':user_id/UserInteraction', loadChildren: () => import('../UserInteraction/UserInteraction.module').then(m => m.UserInteractionModule),
    data: {
        oPermission: {
            permissionId: 'UserInteraction-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }