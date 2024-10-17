import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Story-card.component.html',
  styleUrls: ['./Story-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Story-card]': 'true'
  }
})

export class StoryCardComponent {


}