import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackCardComponent } from 'src/app/shared/feedback-card/feedback-card.component';
import { AutoSliderComponent } from 'src/app/shared/auto-slider/auto-slider.component';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, FeedbackCardComponent, AutoSliderComponent],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss']
})
export class TestimonialsSectionComponent {

  clientFeedbacks_0 = [
    {
      companyName: 'SmartCookieWifi Inc.',
      clientName: 'Adrien Laurent',
      feedback: 'Hamza did an excellent job, was fast and responsive. We will hire him again.',
      rate: 5
    }, {
      companyName: '',
      clientName: 'Carla Harris',
      feedback: 'Hamza integrated a job listing API for us and was also very accommodating with CSS to get it to look just how we wanted. Very happy and would highly recommend!',
      rate: 5
    }, {
      companyName: '',
      clientName: 'Fchef Fecheng',
      feedback: 'Good Work, Good Heart, Great Patience, Really Recommend, Amazing Guy!',
      rate: 5
    }, {
      companyName: '',
      clientName: 'Alexander Coutts',
      feedback: 'Hamza was extremely fast to reply and is a highly talented and capable programmer and web designer. He was able to expertly create an interactive, visually pleasing map. I would absolutely work with him again.',
      rate: 5
    }, {
      companyName: '',
      clientName: 'Muhammad Roshdy',
      feedback: 'It was a great project with Hamza. Hamza is a highly experienced and professional developer. Thank you Hamza for high quality and quick output.',
      rate: 5
    }, {
      companyName: 'Three Monkeys International Inc.',
      clientName: 'Pauline MOREL',
      feedback: 'Hamza is a dedicated and skilled developer, who has shown great professionalism. We will not hesitate to hire him again in the future, and we highly recommend him.',
      rate: 5
    }, {
      companyName: 'PandaSoft',
      clientName: 'Emily Tan',
      feedback: 'Once again Hamza delivered super elegant code. Everything was done quickly and professionally. Will need to find new tasks to make use of his exceptional talent.',
      rate: 5
    }, {
      companyName: 'ThetaConsultant',
      clientName: 'Manigandan Chokkalinkam',
      feedback: 'Good in understanding requirement and gave a good solution. Will be collaborating with Hamza more.',
      rate: 5
    }, {
      companyName: 'MTGBot',
      clientName: 'Daniel Beaupre',
      feedback: 'Went above and beyond to provide additional support for component. Code was clean and readable. Would highly recommend.',
      rate: 5
    }
  ];

  clientFeedbacks_1 = [
    {
      companyName: 'EMK Sports Ltd',
      clientName: 'Khalid Kamal',
      feedback: 'It was pleasure working with Hamza on the project which was a green field and Hamza detailed the basic scope and proposed technical solutions that fit our requirements. Hamza discarded our original UI design which we provided to him and was confident to commit that he could do better and redesigned the UI which was beyond the scope of Angular and springboot for which he was hired. In the end we were delighted with the outcome.',
      rate: 5
    }, {
      companyName: '',
      clientName: 'Boyko Vasilev',
      feedback: 'I worked with Hamza on a Javascript project and I am very happy with the quality of work and his commitment. He is responsible and has high technical knowledge and experience, manages to solve complex tasks. I strongly recommend!',
      rate: 4.85
    }, {
      companyName: '',
      clientName: 'Luciano Baragiola',
      feedback: 'I worked with Hamza for a simple but unusual type of work. I needed a simple interactive demo which required quite some javascript and mathematical knowledge. Hamza immediately understood what I wanted and he actually went the extra mile, suggesting improvements and additional features. I\'m sure I will work again with him in the coming months, to extend the demo he built',
      rate: 5
    }, {
      companyName: 'SmartCookieWifi Inc.',
      clientName: 'Adrien Laurent',
      feedback: 'Once again Hamza did a great job with this assignement. We highly recommend his services.',
      rate: 5
    }, {
      companyName: '',
      clientName: 'Firat Edis',
      feedback: 'It was very easy to work with Hamza. He understands your requirement and delivers on time. I can just recommend him.',
      rate: 5
    }, {
      companyName: 'SmartCookieWifi Inc.',
      clientName: 'Adrien Laurent',
      feedback: 'Once again Hamza did an excellent job.',
      rate: 5
    }, {
      companyName: 'SmartCookieWifi Inc.',
      clientName: 'Kenny Schumacher',
      feedback: 'Hamza was quick and did an excellent job."',
      rate: 5
    }, {
      companyName: 'Salesfive GmbH',
      clientName: 'Dylan Johnston',
      feedback: 'Hamza was able to deliver exactly what I asked for. Looking forward to working with him again.',
      rate: 5
    }
  ]


}
