import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternwearwComponent } from './westernwearw.component';

describe('WesternwearwComponent', () => {
  let component: WesternwearwComponent;
  let fixture: ComponentFixture<WesternwearwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesternwearwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternwearwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
