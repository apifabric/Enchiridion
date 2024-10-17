import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZipCodeDatumHomeComponent } from './home/ZipCodeDatum-home.component';
import { ZipCodeDatumNewComponent } from './new/ZipCodeDatum-new.component';
import { ZipCodeDatumDetailComponent } from './detail/ZipCodeDatum-detail.component';

const routes: Routes = [
  {path: '', component: ZipCodeDatumHomeComponent},
  { path: 'new', component: ZipCodeDatumNewComponent },
  { path: ':id', component: ZipCodeDatumDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ZipCodeDatum-detail-permissions'
      }
    }
  },{
    path: ':zip_code_data_id/ZipCodeReport', loadChildren: () => import('../ZipCodeReport/ZipCodeReport.module').then(m => m.ZipCodeReportModule),
    data: {
        oPermission: {
            permissionId: 'ZipCodeReport-detail-permissions'
        }
    }
}
];

export const ZIPCODEDATUM_MODULE_DECLARATIONS = [
    ZipCodeDatumHomeComponent,
    ZipCodeDatumNewComponent,
    ZipCodeDatumDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZipCodeDatumRoutingModule { }