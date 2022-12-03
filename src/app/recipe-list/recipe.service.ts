import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from 'src/models/Recipe';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  baseUrl = 'http://localhost:3000/recipes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  findAll(): Promise<Recipe[]> {
    return lastValueFrom(this.httpClient.get<Recipe[]>(this.baseUrl));
  }

  findById(id: string): Promise<Recipe> {
    return lastValueFrom(this.httpClient.get<Recipe>(`${this.baseUrl}/${id}`));
  }

  save(recipe: Recipe): Promise<Recipe> {
    return lastValueFrom(
      this.httpClient.post<Recipe>(
        this.baseUrl,
        JSON.stringify(recipe),
        this.httpOptions
      )
    );
  }

  update(recipe: Recipe): Promise<Recipe> {
    return lastValueFrom(
      this.httpClient.put<Recipe>(
        `${this.baseUrl}/${recipe.id}`,
        JSON.stringify(recipe),
        this.httpOptions
      )
    );
  }
  delete(id: string): Promise<Recipe> {
    return lastValueFrom(
      this.httpClient.delete<Recipe>(`${this.baseUrl}/${id}`)
    );
  }
}
