import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public redirectUrl: string;
  public loginStatus = new BehaviorSubject(false);
}
