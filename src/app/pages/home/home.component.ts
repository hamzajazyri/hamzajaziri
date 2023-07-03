import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from 'src/app/core/components/hero-section/hero-section.component';
import { LatestWorkSectionComponent } from 'src/app/core/components/latest-work-section/latest-work-section.component';
import { TestimonialsSectionComponent } from 'src/app/core/components/testimonials-section/testimonials-section.component';
import { ExperienceSectionComponent } from 'src/app/core/components/experience-section/experience-section.component';
import { ContributionsSectionComponent } from 'src/app/core/components/contributions-section/contributions-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    LatestWorkSectionComponent,
    TestimonialsSectionComponent,
    ExperienceSectionComponent,
    ContributionsSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
