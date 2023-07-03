import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateStarComponent } from '../rate-star/rate-star.component';

@Component({
  selector: 'app-feedback-card',
  standalone: true,
  imports: [CommonModule, RateStarComponent],
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss']
})
export class FeedbackCardComponent {

  @Input() feedback!: {companyName: string, clientName: string, rate: number, feedback: string};

  @Input('full-with') fullWith = false;
}
