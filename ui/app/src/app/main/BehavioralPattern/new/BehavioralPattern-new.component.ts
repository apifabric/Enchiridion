import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'BehavioralPattern-new',
  templateUrl: './BehavioralPattern-new.component.html',
  styleUrls: ['./BehavioralPattern-new.component.scss']
})
export class BehavioralPatternNewComponent {
  @ViewChild("BehavioralPatternForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}