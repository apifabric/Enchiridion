import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreferenceCategoryHomeComponent } from './home/PreferenceCategory-home.component';
import { PreferenceCategoryNewComponent } from './new/PreferenceCategory-new.component';
import { PreferenceCategoryDetailComponent } from './detail/PreferenceCategory-detail.component';

const routes: Routes = [
  {path: '', component: PreferenceCategoryHomeComponent},
  { path: 'new', component: PreferenceCategoryNewComponent },
  { path: ':id', component: PreferenceCategoryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PreferenceCategory-detail-permissions'
      }
    }
  }
];

export const PREFERENCECATEGORY_MODULE_DECLARATIONS = [
    PreferenceCategoryHomeComponent,
    PreferenceCategoryNewComponent,
    PreferenceCategoryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenceCategoryRoutingModule { }