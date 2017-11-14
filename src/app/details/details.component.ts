import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Collection } from '../services/collection.service';
import { CollectionI } from '../services/collection.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {

  private currentDescription: any;
  private show:boolean = false;
  private newItem:CollectionI = {
    Name: '',
    Calories: '',
    Ingredients: '',
    Color: ''
  }

  constructor(private col: Collection) { }

  ngOnInit() {
    this.currentDescription = this.col.getCurrentDescription();
  }

  deleteDrink(){
    this.col.deleteDrink();
  }

  addNewDrink(){
    this.col.addNewDrink(this.newItem);
    this.newItem = {
      Name: '',
      Calories: '',
      Ingredients: '',
      Color: ''
    }
  }

  editDrink(){
    this.col.editDrink(this.currentDescription.Description);
    this.show = false;
  }
}
