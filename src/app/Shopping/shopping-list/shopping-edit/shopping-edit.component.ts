import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { Ingredient } from "../../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @Output() emitIngredients = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputTag: ElementRef;
  @ViewChild('amountInput') amountInputTag: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addIngredients(){
    const ingName = this.nameInputTag.nativeElement.value;
    const ingAmount = this.nameInputTag.nativeElement.value;

    const newIngredient: Ingredient = new Ingredient(ingName, ingAmount);
    this.emitIngredients.emit(newIngredient);
  }
}
