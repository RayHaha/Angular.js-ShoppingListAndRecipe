// theoretically, @injectable is optional, you don;t need to add it to your services
// but you need to add it as soon as your service gets another service injected

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, tap } from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService){

    }

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-course-recipe-book-305a9.firebaseio.com/recipes.json', recipes).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>('https://ng-course-recipe-book-305a9.firebaseio.com/recipes.json').pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                });
            }),tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
        );
    }
}