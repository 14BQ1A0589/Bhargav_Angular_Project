import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurtieswComponent } from './kurtiesw.component';

describe('KurtieswComponent', () => {
  let component: KurtieswComponent;
  let fixture: ComponentFixture<KurtieswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurtieswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurtieswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
