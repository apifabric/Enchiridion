import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ConsumerPreference-new',
  templateUrl: './ConsumerPreference-new.component.html',
  styleUrls: ['./ConsumerPreference-new.component.scss']
})
export class ConsumerPreferenceNewComponent {
  @ViewChild("ConsumerPreferenceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}