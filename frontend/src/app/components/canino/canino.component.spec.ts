import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { CaninoComponent } from './canino.component';

describe('CaninoComponent', () => {
  let component: CaninoComponent;
  let fixture: ComponentFixture<CaninoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaninoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaninoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
