import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Business-card.component.html',
  styleUrls: ['./Business-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Business-card]': 'true'
  }
})

export class BusinessCardComponent {


}