import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualshirtsComponent } from './casualshirts.component';

describe('CasualshirtsComponent', () => {
  let component: CasualshirtsComponent;
  let fixture: ComponentFixture<CasualshirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasualshirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasualshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
