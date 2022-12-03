import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  public title: string = 'Gerenciador de Receitas';

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  public exit(): void {
    this.router.navigate([''])
  }
}
