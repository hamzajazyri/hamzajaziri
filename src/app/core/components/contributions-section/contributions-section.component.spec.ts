import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionsSectionComponent } from './contributions-section.component';

describe('ContributionsSectionComponent', () => {
  let component: ContributionsSectionComponent;
  let fixture: ComponentFixture<ContributionsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContributionsSectionComponent]
    });
    fixture = TestBed.createComponent(ContributionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
