import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe('Test Recipe', 'This is a test', 
  //   'https://ichef.bbci.co.uk/news/320/cpsprodpb/27C9/production/_103158101_tha.jpg'),
  //   new Recipe('Another Recipe', 'This is a test', 
  //   'https://ichef.bbci.co.uk/news/320/cpsprodpb/27C9/production/_103158101_tha.jpg')
  // ];
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
