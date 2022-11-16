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

    this.recipeService
      .findById(recipeId)
      .then((res) => {
        if (res !== null) {
          this.recipe = res;
        } else {
          this.recipe = new Recipe(0, '', '', '', '', '');
        }
      })
      .catch((err) => console.error(err));
  }

  onSubmit() {
    if (this.recipe.id == 0) {
      this.salvarReceita();
    } else {
      this.atualizarReceita();
    }
  }

  clearFields() {
    this.recipe = new Recipe(0, '', '', '', '', '');
  }

  private salvarReceita(): void {
    this.recipe.id = this.recipeService.getLastId() + 1;
    this.recipeService
      .save(this.recipe)
      .then((res) => {
        M.toast({
          html: 'Receita salva com sucesso!',
          displayLength: 3000,
        });

        this.router.navigate(['/main-app']);
      })
      .catch((err) => console.error(err));
  }

  private atualizarReceita(): void {
    this.recipeService
      .update(this.recipe)
      .then((res) => {
        M.toast({
          html: 'Receita atualizada com sucesso!',
          displayLength: 3000,
        });

        this.router.navigate(['/main-app']);
      })
      .catch((err) => console.error(err));
  }
}
