import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestWorkSectionComponent } from './latest-work-section.component';

describe('LatestWorkSectionComponent', () => {
  let component: LatestWorkSectionComponent;
  let fixture: ComponentFixture<LatestWorkSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LatestWorkSectionComponent]
    });
    fixture = TestBed.createComponent(LatestWorkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
