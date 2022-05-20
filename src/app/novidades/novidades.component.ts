import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Novidades } from '../models/novidades.model';

@Component({
  selector: 'app-novidades',
  templateUrl: './novidades.component.html',
  styleUrls: ['./novidades.component.scss']
})
export class NovidadesComponent implements OnInit {



  @Input('data') item! : Novidades;
  news! : Novidades;
  constructor() { 
    
  }
  ngOnInit(): void {
    this.news = this.item;
    console.log("aaaaaaa",this.item)
  }

  

}
