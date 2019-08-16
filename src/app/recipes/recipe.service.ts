import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is a test', 
        'https://ichef.bbci.co.uk/news/320/cpsprodpb/27C9/production/_103158101_tha.jpg'),
        new Recipe('Another Recipe', 'This is a test', 
        'https://ichef.bbci.co.uk/news/320/cpsprodpb/27C9/production/_103158101_tha.jpg')
      ];

    getRecipes(){
        return this.recipes.slice();
    }

}