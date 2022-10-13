export class Recipe {
  public name: string;
  public description: string;
  public imageUrl: string;
  public ingredients?: string[];

  constructor( name: string, description:string,img: string, ingredients?:string[]){
    this.name = name;
    this.description = description;
    this.imageUrl = img;
    this.ingredients = ingredients;
  }
}
