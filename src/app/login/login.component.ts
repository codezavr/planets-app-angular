import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.form = this.fb.group({
      email: [ '', [ Validators.required, Validators.email ] ],
    });
  }

  public submitLoginForm() {
    const urlToNavigate = this.loginService.redirectUrl ? this.loginService.redirectUrl : '';
    if (this.form.valid) {
      this.loginService.loginStatus.next(true);
      this.router.navigate([ urlToNavigate ]);
    }
  }
}
