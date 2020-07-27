import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PlanetType } from '../shared/planet.type';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Injectable({ providedIn: 'root' })
export class PlanetItemResolver implements Resolve<PlanetType> {
  constructor(private appService: AppService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PlanetType> {
    return this.appService.getPlanetByName(route.url[0].path);
  }
}
