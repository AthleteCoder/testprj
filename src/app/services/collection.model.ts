export class CollectionI {
    public Name:string;
    public Color:string;
    public Ingredients:string;
    public Calories:string;

    constructor(Name: string, Color: string, Ingredients: string, Calories: string){
        this.Name = Name;
        this.Color = Color;
        this.Ingredients = Ingredients;
        this.Calories = Calories;
    }
}