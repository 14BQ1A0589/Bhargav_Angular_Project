import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterwearComponent } from './winterwear.component';

describe('WinterwearComponent', () => {
  let component: WinterwearComponent;
  let fixture: ComponentFixture<WinterwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinterwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
