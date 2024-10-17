import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserInteraction-card.component.html',
  styleUrls: ['./UserInteraction-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserInteraction-card]': 'true'
  }
})

export class UserInteractionCardComponent {


}