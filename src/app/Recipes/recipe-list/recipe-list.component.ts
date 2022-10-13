import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() emitRecipe = new EventEmitter<Recipe>();

   recipes:Recipe[] = [
     new Recipe('Wrap de legumes', 'test1 test1 teste1', 'test1' , ['pita', 'alface', 'tomate', 'frango', 'iogurte']),
     new Recipe('salada de massas com pessego', 'test2 teste2 teste 2', 'test2', ['pessegos', 'noz', 'massa fuzili', 'tomate'])
   ];


  constructor() { }

  ngOnInit(): void {
  }

  clickOnRecipe(recipe: Recipe){
    this.emitRecipe.emit(recipe)
  }

}
