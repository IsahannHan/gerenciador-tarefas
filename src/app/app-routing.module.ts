import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainAppComponent } from './main-app/main-app.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main-app',
    component: MainAppComponent,
    children: [
      {
        path: '',
        redirectTo: 'recipe-list',
        pathMatch: 'full',
      },
      {
        path: 'recipe-list',
        component: RecipeListComponent,
      },
      {
        path: 'recipe-form',
        component: RecipeFormComponent,
        
      },
      {
        path: 'recipe-view',
        component: RecipeViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
