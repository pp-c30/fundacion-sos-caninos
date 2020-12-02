import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaclidadesPublicComponent } from './locaclidades-public.component';

describe('LocaclidadesPublicComponent', () => {
  let component: LocaclidadesPublicComponent;
  let fixture: ComponentFixture<LocaclidadesPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaclidadesPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaclidadesPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
