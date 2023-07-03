import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contributions-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contributions-section.component.html',
  styleUrls: ['./contributions-section.component.scss']
})
export class ContributionsSectionComponent {

  contributions = [
    {
      icon: 'angular-icon.svg',
      name: 'Angular/Components',
      title: 'fix(material/list): add disabled attribute for mat-list-item buttons',
      link: 'https://github.com/angular/components/pull/26672'
    },{
      icon: 'angular-icon.svg',
      name: 'Angular/Components',
      title: 'docs(material/datepicker): avoid CalendarView switching',
      link: 'https://github.com/angular/components/pull/26652'
    },{
      icon: 'primeng-icon.svg',
      name: 'primefaces/primeng',
      title: 'Autocomplete: Issue with Virtual Scroll',
      link: 'https://github.com/primefaces/primeng/pull/12619'
    }
  ]

}
