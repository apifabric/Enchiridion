import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserInteraction-new',
  templateUrl: './UserInteraction-new.component.html',
  styleUrls: ['./UserInteraction-new.component.scss']
})
export class UserInteractionNewComponent {
  @ViewChild("UserInteractionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}