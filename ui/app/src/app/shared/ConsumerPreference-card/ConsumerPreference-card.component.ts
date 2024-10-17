import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ConsumerPreference-card.component.html',
  styleUrls: ['./ConsumerPreference-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ConsumerPreference-card]': 'true'
  }
})

export class ConsumerPreferenceCardComponent {


}