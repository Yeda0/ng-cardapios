import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCardapioComponent } from './lista-cardapio.component';

describe('ListaCardapioComponent', () => {
  let component: ListaCardapioComponent;
  let fixture: ComponentFixture<ListaCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
