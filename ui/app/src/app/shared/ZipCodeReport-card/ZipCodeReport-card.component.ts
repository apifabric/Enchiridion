import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ZipCodeReport-card.component.html',
  styleUrls: ['./ZipCodeReport-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ZipCodeReport-card]': 'true'
  }
})

export class ZipCodeReportCardComponent {


}