import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './BehavioralPattern-card.component.html',
  styleUrls: ['./BehavioralPattern-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.BehavioralPattern-card]': 'true'
  }
})

export class BehavioralPatternCardComponent {


}