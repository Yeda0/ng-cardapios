import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Novidades} from '../models/novidades.model';

@Component({
  selector: 'app-novidades-list',
  templateUrl: './novidades-list.component.html',
  styleUrls: ['./novidades-list.component.scss']
})
export class NovidadesListComponent implements OnInit {

  novidades! : Novidades[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Novidades[]>('http://localhost:3000/news').subscribe(
      (data) => {
        console.log("ainnnn", data);
        this.novidades = data;
      }
    )
  }

}
