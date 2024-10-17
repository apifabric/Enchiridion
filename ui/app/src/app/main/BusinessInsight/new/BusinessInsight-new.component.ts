import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'BusinessInsight-new',
  templateUrl: './BusinessInsight-new.component.html',
  styleUrls: ['./BusinessInsight-new.component.scss']
})
export class BusinessInsightNewComponent {
  @ViewChild("BusinessInsightForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}