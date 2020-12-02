import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosPublicComponent } from './requisitos-public.component';

describe('RequisitosPublicComponent', () => {
  let component: RequisitosPublicComponent;
  let fixture: ComponentFixture<RequisitosPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitosPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitosPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
