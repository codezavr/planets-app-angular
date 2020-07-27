import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetType } from '../shared/planet.type';

@Component({
  selector: 'planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: [ './planet-item.component.scss' ]
})
export class PlanetItemComponent implements OnInit {
  public planet: PlanetType;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.planet = this.route.snapshot.data['planet'];
  }

}
