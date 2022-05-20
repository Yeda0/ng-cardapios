import { Component, OnInit } from '@angular/core';
import { Observable, pipe, } from 'rxjs';
// import { Cardapio } from '../cardapio/cardapio.component';
import {HttpClient} from "@angular/common/http";
import { Cardapio } from '../models/cardapio.model';

@Component({
  selector: 'app-lista-cardapio',
  templateUrl: './lista-cardapio.component.html',
  styleUrls: ['./lista-cardapio.component.scss']
})
export class ListaCardapioComponent implements OnInit {

  cardapios! : Cardapio[];

  constructor(private http:HttpClient) {
   
  }

  ngOnInit(): void {
     
    this.http.get<Cardapio[]>('http://localhost:3000/menus').subscribe(
      (data) => {
        console.log(data);
        this.cardapios = data;
      }
    )
  }

  

}
 

