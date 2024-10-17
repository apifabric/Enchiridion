import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PreferenceCategory-new',
  templateUrl: './PreferenceCategory-new.component.html',
  styleUrls: ['./PreferenceCategory-new.component.scss']
})
export class PreferenceCategoryNewComponent {
  @ViewChild("PreferenceCategoryForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}