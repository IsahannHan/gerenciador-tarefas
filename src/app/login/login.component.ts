import { Component, OnInit } from '@angular/core';
import { toast } from 'materialize-css';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  userLogin: FormControl = new FormControl('');
  userPassword: FormControl = new FormControl('');

  constructor(private router: Router) {}

  login(): void {
    const validLogin = !!this.userLogin.value;
    const validPassword = !!this.userPassword.value;

    if (!validLogin || !validPassword) {
      toast({
        html: 'Login inválido!',
        displayLength: 5000,
        classes: 'rounded',
      });
      return;
    }

    this.router.navigate(['/main-app']);
  }
}
