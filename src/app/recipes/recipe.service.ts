import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    // recipeSelected = new EventEmitter<Recipe>();
    // private recipes: Recipe[] = [
    //     new Recipe('Test Recipe', 'This is a test',
    //         'https://ichef.bbci.co.uk/news/320/cpsprodpb/27C9/production/_103158101_tha.jpg',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 23)
    //         ]),
    //     new Recipe('Another Recipe', 'This is a test',
    //         'https://ichef.bbci.co.uk/news/320/cpsprodpb/27C9/production/_103158101_tha.jpg',
    //         [
    //             new Ingredient('rice', 1),
    //             new Ingredient('chicken', 5)
    //         ])
    // ];
    private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService){
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    
    getRecipes() {
        // get the copy of recipes
        return this.recipes.slice();
    }
    
    getRecipe(index: number){
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}