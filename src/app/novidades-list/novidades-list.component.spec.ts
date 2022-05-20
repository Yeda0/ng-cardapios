import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovidadesListComponent } from './novidades-list.component';

describe('NovidadesListComponent', () => {
  let component: NovidadesListComponent;
  let fixture: ComponentFixture<NovidadesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovidadesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovidadesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
