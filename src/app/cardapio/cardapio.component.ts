import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent  {

 @Input() imagem = "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/05/picanha-perfeita-scaled.jpg"
 @Input() titulo = "Mofi Paraíba"
 @Input() endereco = "Rua boca de caçapa"
 @Input() cidade = "João Pessoa-PB"
 @Input() telefone = "8392392842"

  constructor() { }


}
