import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  public title: string = 'Gerenciador de Receitas';

  constructor() {}

  ngOnInit(): void {}

  public exit(): void {
    // Implementar saída
    console.log('Exit');
  }
}
