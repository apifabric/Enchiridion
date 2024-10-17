import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Neighborhood-new',
  templateUrl: './Neighborhood-new.component.html',
  styleUrls: ['./Neighborhood-new.component.scss']
})
export class NeighborhoodNewComponent {
  @ViewChild("NeighborhoodForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}