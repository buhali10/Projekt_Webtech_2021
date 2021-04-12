import { Component, OnInit } from '@angular/core';
import {Card} from "../../shared/cards";
import {BackendService} from "../../shared/card.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  table: Card[];
  card: Card;
  index: number;
  constructor(
    private service: BackendService,
  ) { }

  ngOnInit(): void {
    this.index = 0;
    this.getTable();
  }

  getTable():void {
    this.service.getAllCard().subscribe((res) =>
    {
      this.table = res;
      console.log(this.table);
      this.initCard();
    })
  }

  initCard(): any{
    this.card = this.table[this.index]
    return this.card;
  }

  onLeft(): void {
    var random = Math.floor(Math.random() * (this.table.length))
    while(random == this.index){
      random = Math.floor(Math.random() * (this.table.length))
    }
    this.index = random
    this.initCard();
  }

  onRight(): void {
    // create a random integer between the specified values.
    // original formula: Math.floor(Math.random() * (max - min) + min)
    var random = Math.floor(Math.random() * (this.table.length))
    while(random == this.index){
      random = Math.floor(Math.random() * (this.table.length))
    }
    this.index = random
    this.initCard();
  }
}
