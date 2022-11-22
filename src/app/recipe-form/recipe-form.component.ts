import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/models/Recipe';
import { RecipeService } from '../recipe-list/recipe.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.sass'],
})
export class RecipeFormComponent implements OnInit {
  @ViewChild('form')
  form!: NgForm;

  recipe: Recipe = new Recipe('', '', '', '', '', '');
  file: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  onFileChange(fileInputEvent: any) {
    const file = fileInputEvent.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.recipe.image = reader.result;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (this.recipe.id === '') {
      this.salvarReceita();
    } else {
      this.atualizarReceita();
    }
  }

  clearFields() {
    this.recipe = new Recipe('', '', '', '', '', '');
  }

  private salvarReceita(): void {
    this.recipe.id = uuidv4();
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
