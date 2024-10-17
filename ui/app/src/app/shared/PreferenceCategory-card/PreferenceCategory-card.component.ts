import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PreferenceCategory-card.component.html',
  styleUrls: ['./PreferenceCategory-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PreferenceCategory-card]': 'true'
  }
})

export class PreferenceCategoryCardComponent {


}