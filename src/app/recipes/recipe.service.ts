import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is a test',
            'https://ichef.bbci.co.uk/news/320/cpsprodpb/27C9/production/_103158101_tha.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 23)
            ]),
        new Recipe('Another Recipe', 'This is a test',
            'https://ichef.bbci.co.uk/news/320/cpsprodpb/27C9/production/_103158101_tha.jpg',
            [
                new Ingredient('rice', 1),
                new Ingredient('chicken', 5)
            ])
    ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes() {
        
        // get the copy of recipes
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}