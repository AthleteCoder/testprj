import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { log } from 'util';
import { Collection } from '../services/collection.service'; 
import { CollectionI } from '../services/collection.model';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DrinksComponent implements OnInit {

  private collectables: Array<CollectionI>;

  constructor(private col: Collection) { }

  ngOnInit() {
    this.collectables = this.col.getCollection();
  }

  showDetails(index){
    this.col.setDescription(index);
  }

  showAddForm(){
    this.col.showAddForm();
  }
}
