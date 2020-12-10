import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCaninoPublicComponent } from './detalle-canino-public.component';

describe('DetalleCaninoPublicComponent', () => {
  let component: DetalleCaninoPublicComponent;
  let fixture: ComponentFixture<DetalleCaninoPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCaninoPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCaninoPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
