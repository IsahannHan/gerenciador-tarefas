import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/models/Recipe';
import { RecipeService } from '../recipe-list/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.sass'],
})
export class RecipeFormComponent implements OnInit {
  @ViewChild('form')
  form!: NgForm;

  recipe!: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const recipeId = Number(routeParams.get('id'));

    if (recipeId > 0){
      this.recipe = this.recipeService.findById(recipeId);
      console.log(this.recipe);
      
    }else 
      this.recipe = new Recipe(0, '', '', '', '', '');
  }

  onSubmit() {
    if(this.recipe.id == 0){
      this.recipe.id = this.recipeService.getLastId() + 1;
      this.recipeService.save(this.recipe);
    } else {
      this.recipeService.update(this.recipe);
    }

    M.toast({
      html: 'Receita salva com sucesso!',
      displayLength: 5000,
    });

    this.router.navigate(['/main-app']);
  }

  clearFields() {
    this.recipe = new Recipe(0, '', '', '', '', '');
  }
}
