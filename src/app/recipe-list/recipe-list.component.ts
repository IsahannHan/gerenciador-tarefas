import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass'],
})
export class RecipeListComponent implements OnInit {
  columns: string[] = ['Imagem', 'Nomes', 'Tags', 'Ações'];
  recipes: Recipe[] = [
    {
      image:
        'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
      name: 'Bolo de banana',
      tags: [
        { name: 'Banana', color: 'white', backgroundColor: '#a9cfb6' },
        { name: 'Bolo', color: 'white', backgroundColor: '#a9cfb6' },
        { name: 'Doce', color: 'white', backgroundColor: '#a9cfb6' },
        { name: 'Lactose', color: 'white', backgroundColor: '#a9cfb6' },
      ],
    },
    {
      image:
        'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
      name: 'Carne assada',
      tags: [
        { name: 'Carne', color: 'white', backgroundColor: '#a9cfb6' },
        { name: 'Bom', color: 'white', backgroundColor: '#a9cfb6' },
      ],
    },
    {
      image:
        'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
      name: 'Strogonoff',
      tags: [
        { name: 'Frango', color: 'white', backgroundColor: '#a9cfb6' },
        { name: 'Lactose', color: 'white', backgroundColor: '#a9cfb6' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
