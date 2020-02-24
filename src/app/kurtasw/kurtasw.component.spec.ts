import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurtaswComponent } from './kurtasw.component';

describe('KurtaswComponent', () => {
  let component: KurtaswComponent;
  let fixture: ComponentFixture<KurtaswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurtaswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurtaswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
