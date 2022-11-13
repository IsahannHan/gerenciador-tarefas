import { Injectable } from '@angular/core';
import { Recipe } from 'src/models/Recipe';
import { WebStorage } from 'src/services/WebStorage';

@Injectable({
  providedIn: 'root',
})
export class RecipeService extends WebStorage {
  webStorageKey: string = 'RECIPES';

  findAll(): Recipe[] {
    return WebStorage.getEntity(this.webStorageKey);
  }

  findById(id: number): Recipe {
    const recipes: Recipe[] = this.findAll();

    const recipe: Recipe | undefined = recipes.find(
      (recipe) => recipe.id === id
    );

    if (recipe !== undefined) return recipe;

    return null as any;
  }

  getLastId(): number {
    const recipes: Recipe[] = this.findAll();

    console.log(recipes);
    

    if(recipes.length > 0)
      return recipes[recipes.length - 1].id;
    else 
      return 1;
  }

  save(recipe: Recipe) {
    const recipes: Recipe[] = this.findAll()??[];

    recipes.push(recipe);

    WebStorage.saveEntity(this.webStorageKey, recipes);
  }

  update(recipe: Recipe) {
    this.delete(recipe.id);
    this.save(recipe);
  }

  saveAll(recipes: Recipe[]) {
    WebStorage.saveEntity(this.webStorageKey, recipes);
  }

  delete(id: number) {
    let recipes: Recipe[] = this.findAll();

    recipes = recipes.filter((recipe) => recipe.id !== id);

    this.saveAll(recipes);
  }
}
