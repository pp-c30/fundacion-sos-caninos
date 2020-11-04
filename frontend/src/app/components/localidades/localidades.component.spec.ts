import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadesComponent } from './localidades.component';

describe('LocalidadesComponent', () => {
  let component: LocalidadesComponent;
  let fixture: ComponentFixture<LocalidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
