import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/Recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass'],
})
export class RecipeListComponent implements OnInit {
  columns: string[] = ['Imagem', 'Nome', 'Tags', 'Ações'];
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.findAllRecipes();
  }

  delete(id: string): void {
    this.recipeService
      .delete(id)
      .then((res) => {
        if (res !== null) {
          M.toast({
            html: 'Receita removida com sucesso!',
            displayLength: 5000,
          });

          this.findAllRecipes();
        }
      })
      .catch((err) => console.error(err));
  }

  private findAllRecipes(): void {
    this.recipeService
      .findAll()
      .then((res) => {
        this.recipes = res;
      })
      .catch((err) => console.error(err));
  }
}
