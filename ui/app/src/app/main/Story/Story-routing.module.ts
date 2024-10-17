import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryHomeComponent } from './home/Story-home.component';
import { StoryNewComponent } from './new/Story-new.component';
import { StoryDetailComponent } from './detail/Story-detail.component';

const routes: Routes = [
  {path: '', component: StoryHomeComponent},
  { path: 'new', component: StoryNewComponent },
  { path: ':id', component: StoryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Story-detail-permissions'
      }
    }
  }
];

export const STORY_MODULE_DECLARATIONS = [
    StoryHomeComponent,
    StoryNewComponent,
    StoryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule { }