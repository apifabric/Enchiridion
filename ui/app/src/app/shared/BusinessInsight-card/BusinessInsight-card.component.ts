import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './BusinessInsight-card.component.html',
  styleUrls: ['./BusinessInsight-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.BusinessInsight-card]': 'true'
  }
})

export class BusinessInsightCardComponent {


}