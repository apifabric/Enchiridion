import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ZipCodeDatum-new',
  templateUrl: './ZipCodeDatum-new.component.html',
  styleUrls: ['./ZipCodeDatum-new.component.scss']
})
export class ZipCodeDatumNewComponent {
  @ViewChild("ZipCodeDatumForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}