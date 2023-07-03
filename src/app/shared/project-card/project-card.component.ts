import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from 'src/app/pages/project-detail/project-detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ProjectDetailComponent],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input('is-reverse') isReverse = false;
  @Input() project! : any;

  isProjectOpened = false;
  #router = inject(Router);

  openProjectDetails() {
    // this.#router.navigateByUrl('work');
    this.isProjectOpened = !this.isProjectOpened;
    document.querySelector("body")!.style.overflow = 'hidden';
  }
  closeProjectDetails() {
    this.isProjectOpened = false;
    document.querySelector("body")!.style.overflow = 'auto';
  }
}
