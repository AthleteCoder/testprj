import { CollectionI } from './collection.model';
export class Collection {
    private drinksCollection: CollectionI[] = [
        {Name: 'Water', Color: 'Transparent', Calories: '100', Ingredients: 'None'},
        {Name: 'Soda', Color: 'Transparent', Calories: '100', Ingredients: 'Kofzim'},
        {Name: 'Cola', Color: 'Black', Calories: '120', Ingredients: 'Suger'},
    ];

    private description = {Description: null};

    getCollection(){
        return this.drinksCollection;
    }

    getCurrentDescription(){
        return this.description;
    }

    setDescription(index){
        this.description.Description = this.drinksCollection[index];
    }

    addNewDrink(item: CollectionI){
        this.drinksCollection.push(item);
    }

    deleteDrink(){
        var elementPos = this.drinksCollection.map(function(x) {return x.Name; }).indexOf(this.description.Description.Name);
        this.drinksCollection.splice(elementPos,1);
        this.description.Description = null;
    }

    editDrink(item: CollectionI){
        var elementPos = this.drinksCollection.map(function(x) {return x.Name; }).indexOf(this.description.Description.Name);
        this.drinksCollection[elementPos] = item;
    }

    showAddForm(){
        this.description.Description = null;
    }
}