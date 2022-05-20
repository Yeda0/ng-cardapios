import { Component, Input, OnInit } from '@angular/core';
import { Cardapio } from '../models/cardapio.model';




@Component({
  selector: 'card-menu',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit  {

//  @Input() imagem = "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/05/picanha-perfeita-scaled.jpg"
//  @Input() titulo = "Mofi Paraíba"
//  @Input() endereco = "Rua boca de caçapa"
//  @Input() cidade = "João Pessoa-PB"
//  @Input() telefone = "8392392842"

  teste = "paulo"
 @Input('data') item! : Cardapio;
  menu! : Cardapio;
  constructor() { 
    
  }
  ngOnInit(): void {
    console.log('teste', this.item)
    this.menu = this.item;
  }


}
