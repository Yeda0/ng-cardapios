import { Component, Input, OnInit } from '@angular/core';
import { Cardapio } from '../models/cardapio.model';




@Component({
  selector: 'card-menu',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit  {
  


 @Input('data') item! : Cardapio;
  menu! : Cardapio;
  constructor() { 
    
  }
  ngOnInit(): void {
    console.log('teste', this.item)
    this.menu = this.item;
  }


}
