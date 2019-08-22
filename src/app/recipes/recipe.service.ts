import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is a test',
            'https://ichef.bbci.co.uk/news/320/cpsprodpb/27C9/production/_103158101_tha.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Another Recipe', 'This is a test',
            'https://ichef.bbci.co.uk/news/320/cpsprodpb/27C9/production/_103158101_tha.jpg',
            [
                new Ingredient('rice', 1),
                new Ingredient('chicken', 4)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}