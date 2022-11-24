import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainAppComponent } from './main-app/main-app.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeListTagsComponent } from './recipe-list/recipe-list-tags/recipe-list-tags.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CamelCasePipe } from './recipe-list/camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipeFormComponent,
    RecipeListComponent,
    LoginComponent,
    MainAppComponent,
    RecipeListTagsComponent,
    CamelCasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
