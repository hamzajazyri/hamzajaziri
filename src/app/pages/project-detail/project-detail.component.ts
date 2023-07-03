import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackCardComponent } from 'src/app/shared/feedback-card/feedback-card.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, FeedbackCardComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {

  @Input() name! : string;
  @Input() tools! : string;
  @Input() description! : string;
  @Input() subName! : string;
  @Input() feedback : any;
  @Input() projectFeatures : Array<any> = [];
  @Input() gridImages : Array<string> = [];

  @Output() onClose = new EventEmitter<void>();

}
