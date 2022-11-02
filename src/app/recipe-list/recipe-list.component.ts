import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass'],
})
export class RecipeListComponent implements OnInit {
  columns: string[] = ['Imagem', 'Nome', 'Tags', 'Ações'];
  recipes: Recipe[] = [
    {
      id: 1,
      image:
        'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
      name: 'Bolo de banana',
      tags: [
        'Banana',
        'Bolo',
        'Doce',
        'Lactose',
      ],
    },
    {
      id: 2,
      image:
        'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
      name: 'Carne assada',
      tags: [
        'Carne',
        'Bom',
      ],
    },
    {
      id: 3,
      image:
        'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
      name: 'Strogonoff',
      tags: [
        'Frango',
        'Lactose',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
