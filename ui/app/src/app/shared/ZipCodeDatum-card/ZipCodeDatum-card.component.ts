import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ZipCodeDatum-card.component.html',
  styleUrls: ['./ZipCodeDatum-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ZipCodeDatum-card]': 'true'
  }
})

export class ZipCodeDatumCardComponent {


}