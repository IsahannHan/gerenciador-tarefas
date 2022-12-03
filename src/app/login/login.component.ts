import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as M from 'materialize-css';
import { User } from 'src/models/User';
import { UserService } from './user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  @ViewChild('formUser')
  form!: NgForm;

  user: User = { id: 0, login: '', password: '' };

  constructor(private router: Router, private userService: UserService) {}

  onSubmit(): void {
    if (this.user.login === '' || this.user.password === '') {
      M.toast({
        html: 'Informe seu usuário e senha!',
        displayLength: 3000,
      });

      return;
    }

    this.userService
      .findByLogin(this.user.login)
      .then((res) => {
        if (res.length === 0) {
          M.toast({
            html: 'Usuário ou senha inválidos!',
            displayLength: 3000,
          });

          return;
        }

        console.log(res);
        console.log(this.user);
        
        if (res[0].password !== this.user.password) {
          M.toast({
            html: 'Usuário ou senha inválidos!',
            displayLength: 3000,
          });

          return;
        }

        M.toast({
          html: 'Login realizado!',
          displayLength: 3000,
        });

        this.router.navigate(['/main-app']);
      })
      .catch((err) => console.error(err));
  }
}
