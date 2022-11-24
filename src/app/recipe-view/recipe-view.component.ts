import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/models/Recipe';
import { RecipeService } from '../recipe-list/recipe.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.sass'],
})
export class RecipeViewComponent implements OnInit {
  recipe: Recipe = new Recipe('', '', '', '', '', '');

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const recipeId: string = routeParams.get('id')!;

    if (recipeId === '') return;

    this.recipeService
      .findById(recipeId)
      .then((res) => {
        if (res !== null) this.recipe = res;
      })
      .catch((err) => console.error(err));
  }
}
