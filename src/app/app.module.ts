import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';

import {RecipesComponent} from "./Recipes/recipes.component";
import { RecipeListComponent } from './Recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Recipes/recipe-detail/recipe-detail.component';

import { ShoppingComponent } from './Shopping/shopping.component';
import { ShoppingListComponent } from './Shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Shopping/shopping-list/shopping-edit/shopping-edit.component';
import { NavigationBarComponent } from './Header/navigation-bar/navigation-bar.component';
import { RecipeItemComponent } from './Recipes/recipe-list/recipe-item/recipe-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    NavigationBarComponent,
    RecipeItemComponent,
     ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
