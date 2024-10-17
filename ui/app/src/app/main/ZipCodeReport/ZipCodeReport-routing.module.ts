import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZipCodeReportHomeComponent } from './home/ZipCodeReport-home.component';
import { ZipCodeReportNewComponent } from './new/ZipCodeReport-new.component';
import { ZipCodeReportDetailComponent } from './detail/ZipCodeReport-detail.component';

const routes: Routes = [
  {path: '', component: ZipCodeReportHomeComponent},
  { path: 'new', component: ZipCodeReportNewComponent },
  { path: ':id', component: ZipCodeReportDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ZipCodeReport-detail-permissions'
      }
    }
  }
];

export const ZIPCODEREPORT_MODULE_DECLARATIONS = [
    ZipCodeReportHomeComponent,
    ZipCodeReportNewComponent,
    ZipCodeReportDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZipCodeReportRoutingModule { }