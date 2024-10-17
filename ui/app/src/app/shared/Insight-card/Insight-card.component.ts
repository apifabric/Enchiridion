import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Insight-card.component.html',
  styleUrls: ['./Insight-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Insight-card]': 'true'
  }
})

export class InsightCardComponent {


}