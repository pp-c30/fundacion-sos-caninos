import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaPublicComponent } from './provincia-public.component';

describe('ProvinciaPublicComponent', () => {
  let component: ProvinciaPublicComponent;
  let fixture: ComponentFixture<ProvinciaPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinciaPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinciaPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
