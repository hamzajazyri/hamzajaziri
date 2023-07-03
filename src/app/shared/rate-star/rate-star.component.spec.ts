import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateStarComponent } from './rate-star.component';

describe('RateStarComponent', () => {
  let component: RateStarComponent;
  let fixture: ComponentFixture<RateStarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RateStarComponent]
    });
    fixture = TestBed.createComponent(RateStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
