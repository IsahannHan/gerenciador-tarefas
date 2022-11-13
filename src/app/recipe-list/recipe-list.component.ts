import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/Recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass'],
})
export class RecipeListComponent implements OnInit {
  columns: string[] = ['Nome', 'Tags', 'Ações'];
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.findAll();
  }

  delete(id: number): void {
    this.recipeService.delete(id);
    this.recipes = this.recipeService.findAll();

    M.toast({
      html: 'Receita removida com sucesso!',
      displayLength: 5000,
    });
  }
}
