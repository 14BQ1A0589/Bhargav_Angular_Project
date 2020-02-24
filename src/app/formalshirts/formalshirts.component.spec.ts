import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalshirtsComponent } from './formalshirts.component';

describe('FormalshirtsComponent', () => {
  let component: FormalshirtsComponent;
  let fixture: ComponentFixture<FormalshirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormalshirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
