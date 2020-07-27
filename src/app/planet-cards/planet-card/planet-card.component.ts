import { Component, Input } from '@angular/core';
import { PlanetType } from '../../shared/planet.type';

@Component({
  selector: 'planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: [ './planet-card.component.scss' ]
})
export class PlanetCardComponent {
  @Input() planet: PlanetType;
}
