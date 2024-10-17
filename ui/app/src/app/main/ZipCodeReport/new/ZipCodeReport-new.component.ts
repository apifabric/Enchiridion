import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ZipCodeReport-new',
  templateUrl: './ZipCodeReport-new.component.html',
  styleUrls: ['./ZipCodeReport-new.component.scss']
})
export class ZipCodeReportNewComponent {
  @ViewChild("ZipCodeReportForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}