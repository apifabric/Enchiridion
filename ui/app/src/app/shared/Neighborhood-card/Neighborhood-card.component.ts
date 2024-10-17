import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Neighborhood-card.component.html',
  styleUrls: ['./Neighborhood-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Neighborhood-card]': 'true'
  }
})

export class NeighborhoodCardComponent {


}