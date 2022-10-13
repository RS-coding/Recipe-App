import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [
    new Ingredient('apples', 6),
    new Ingredient('pears', 7)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addIngredients(ing: Ingredient){
    this.ingredients.push(ing);
  }

}
