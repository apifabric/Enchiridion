import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInteractionHomeComponent } from './home/UserInteraction-home.component';
import { UserInteractionNewComponent } from './new/UserInteraction-new.component';
import { UserInteractionDetailComponent } from './detail/UserInteraction-detail.component';

const routes: Routes = [
  {path: '', component: UserInteractionHomeComponent},
  { path: 'new', component: UserInteractionNewComponent },
  { path: ':id', component: UserInteractionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserInteraction-detail-permissions'
      }
    }
  }
];

export const USERINTERACTION_MODULE_DECLARATIONS = [
    UserInteractionHomeComponent,
    UserInteractionNewComponent,
    UserInteractionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInteractionRoutingModule { }