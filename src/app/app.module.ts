import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ListaCardapioComponent } from './lista-cardapio/lista-cardapio.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleComponent } from './title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NovidadesComponent } from './novidades/novidades.component';
import { NovidadesListComponent } from './novidades-list/novidades-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardapioComponent,
    ListaCardapioComponent,
    HomeComponent,
    TitleComponent,
    NovidadesComponent,
    NovidadesListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
