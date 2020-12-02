import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaninoPublicComponent } from './canino-public.component';

describe('CaninoPublicComponent', () => {
  let component: CaninoPublicComponent;
  let fixture: ComponentFixture<CaninoPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaninoPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaninoPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
