import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlanetType } from '../shared/planet.type';
import { AppService } from '../app.service';

@Component({
  selector: 'planet-cards',
  templateUrl: './planet-cards.component.html',
  styleUrls: [ './planet-cards.component.scss' ]
})
export class PlanetCardsComponent {

  public planetsList: PlanetType[] = [];

  constructor(private appService: AppService, private router: Router) {
  }

  ngOnInit() {
    this.appService.getPlanetsList().subscribe((planetsList) => {
      this.planetsList = planetsList;
    })
  }

  public navigateToThePlanet(planetName: string) {
    const normalizedPlanetName = planetName.toLowerCase().split(' ').join('');
    this.router.navigate([ '/planets/', `${normalizedPlanetName}` ]);
  }

}
