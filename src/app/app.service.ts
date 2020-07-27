import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanetType } from './shared/planet.type';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  public getPlanetsList() {
    return this.http.get<PlanetType[]>('http://private-anon-5b2bae4500-starhub.apiary-mock.com/api/planets');
  }

  public getPlanetByName(planetName: string) {
    // Issue on back-end, the same planet regardless param [PlanetName]
    // Can pass any value [PlanetName]
    return this.http.get<PlanetType>(`http://private-anon-5b2bae4500-starhub.apiary-mock.com/api/planets/${planetName}`);
  }
}
