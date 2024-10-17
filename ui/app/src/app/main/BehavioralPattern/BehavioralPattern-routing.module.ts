import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehavioralPatternHomeComponent } from './home/BehavioralPattern-home.component';
import { BehavioralPatternNewComponent } from './new/BehavioralPattern-new.component';
import { BehavioralPatternDetailComponent } from './detail/BehavioralPattern-detail.component';

const routes: Routes = [
  {path: '', component: BehavioralPatternHomeComponent},
  { path: 'new', component: BehavioralPatternNewComponent },
  { path: ':id', component: BehavioralPatternDetailComponent,
    data: {
      oPermission: {
        permissionId: 'BehavioralPattern-detail-permissions'
      }
    }
  }
];

export const BEHAVIORALPATTERN_MODULE_DECLARATIONS = [
    BehavioralPatternHomeComponent,
    BehavioralPatternNewComponent,
    BehavioralPatternDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BehavioralPatternRoutingModule { }