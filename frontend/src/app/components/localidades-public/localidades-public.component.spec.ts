import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadesPublicComponent } from './localidades-public.component';

describe('LocalidadesPublicComponent', () => {
  let component: LocalidadesPublicComponent;
  let fixture: ComponentFixture<LocalidadesPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalidadesPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadesPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
