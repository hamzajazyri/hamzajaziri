import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from 'src/app/shared/project-card/project-card.component';
import { ProjectDetailComponent } from 'src/app/pages/project-detail/project-detail.component';

@Component({
  selector: 'app-latest-work-section',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, ProjectDetailComponent],
  templateUrl: './latest-work-section.component.html',
  styleUrls: ['./latest-work-section.component.scss']
})
export class LatestWorkSectionComponent {

  projects = [
    {
      name: 'Global Namaz Time',
      subName: 'Web Application',
      description: `
        The Prayertime Website is a dynamic and user-friendly platform designed to provide accurate and convenient access to global namaz (prayer) times. <br/> <br/>
        The website offers a range of essential features, including an auto-detect function that identifies the user's city through their browser or Google Maps APIs. Users can also utilize a search box with auto-complete functionality, allowing them to quickly browse for cities and access recent history. Additionally, the website provides the option to customize calculation methods and juristic settings, enabling users to tailor prayer timings according to their preferences.
      `,
      tools: ['Angular', 'Spring Boot', 'Spring Security', 'PostgreSql', 'AWS', 'SSH', 'Swagger', 'Google Maps APIs'],
      previewImageUrl: 'assets/projects/prayertimes/prayertimes_web2.jpg',
      feedback: {
        companyName: 'EMK Sports Ltd',
        clientName: 'Khalid Kamal',
        feedback: 'It was pleasure working with Hamza on the project which was a green field and Hamza detailed the basic scope and proposed technical solutions that fit our requirements. Hamza discarded our original UI design which we provided to him and was confident to commit that he could do better and redesigned the UI which was beyond the scope of Angular and springboot for which he was hired. In the end we were delighted with the outcome.',
        rate: 5
      },
      gridImageUrls: ['assets/projects/prayertimes/prayertimes_web2.jpg', 'assets/projects/prayertimes/prayertimes_mobile.jpg', 'assets/projects/prayertimes/prayertimes_admin.jpg'],
      projectFeatures: [
        {
          name: 'Prayer Time Calculation',
          description: 'The website will accurately calculate and display prayer times based on the user\'s location and selected calculation methods.'
        }, {
          name: 'Auto-Detect Location',
          description: 'The website will have an auto-detect feature that identifies the user\'s city through their Browser or Google Maps Apis, providing instant prayer times for their current location.'
        }, {
          name: 'Search Functionality',
          description: 'Users can easily search for cities and access recent search history, enabling quick access to prayer times for different locations.'
        }, {
          name: 'Qibla Direction',
          description: 'The website will provide accurate qibla directions specific to each city, helping users determine the direction of the Kaaba for their prayers.'
        }, {
          name: 'Prayer Timetable Downloads',
          description: 'Users will have the option to download monthly or yearly prayer timetables in PDF, JPG, and CSV formats for offline access.'
        }, {
          name: 'Social Sharing',
          description: 'The website will include social sharing functionality, allowing users to easily share prayer times or the website with others.'
        }, {
          name: 'Responsive Design',
          description: 'The user interface will be fully responsive, ensuring optimal viewing and functionality across various devices, including mobile phones and tablets.'
        }, {
          name: 'Localization and Multiple Languages',
          description: 'The website will support multiple languages, including English and Arabic, and dynamically display the appropriate language version based on the user\'s geographic location.'
        }, {
          name: 'Gregorian and Hijri Calendars',
          description: 'The website will integrate both Gregorian and Hijri calendars, providing users with the ability to view prayer times in their preferred calendar system.'
        }, {
          name: 'Timer for Upcoming Prayers',
          description: 'The website will feature timers that countdown to the next prayer time, keeping users informed and prepared.'
        }, {
          name: 'SEO Optimization with SSR',
          description: ' Implementing dynamic titles, metadata, and SEO-friendly URLs using Angular\'s Server-Side Rendering for enhanced search engine visibility and ranking.'
        }, {
          name: 'Backend Portal for Content Management',
          description: 'The website will include a backend portal for managing keywords, titles, metadata descriptions, metatag titles, URLs, ensuring effective content management and SEO control.'
        }, {
          name: 'Sitemap Generation',
          description: 'The website will automatically generate a sitemap file to ensure that all pages are consistently indexed by search engines.'
        },
      ]
    }, {
      name: 'Price Dashboard',
      subName: 'Web Application',
      description: `Price Dashboard is a web application that uses an Excel file to create dynamic sections and generate graphs by fetching data from the Eurostat server. Users can
      customize their preferred settings through the Excel file, <br/><br/>  and the web application processes this information to generate interactive and visually appealing graphs
      that showcase the Eurostat data.`,
      tools: ['HTML', 'CSS', 'JavaScript', 'Excel', 'Apache E-charts'],
      previewImageUrl: 'assets/projects/price-dashboard/price-dashboard.jpg',
      feedback: {
        companyName: '',
        clientName: 'Boyko Vasilev',
        feedback: 'I worked with Hamza on a Javascript project and I am very happy with the quality of work and his commitment. He is responsible and has high technical knowledge and experience, manages to solve complex tasks. I strongly recommend!',
        rate: 4.85
      },
      gridImageUrls: ['assets/projects/price-dashboard/price-dashboard.jpg', 'assets/projects/price-dashboard/price-dashboard_Mobile.jpg'],
      projectFeatures: [
        {
          name: 'Design & Integration',
          description: ' design and integrate an intuitive and visually appealing user interface for the Price Dashboard'
        },{
          name: 'Excel-Based Customization',
          description: 'Users can customize their preferred settings through an Excel file, allowing for personalized data analysis.'
        },{
          name: 'Dynamic Sections & HTML content',
          description: 'The web application creates dynamic sections based on the user\'s settings from Excel file.'
        },{
          name: 'External Apis communication',
          description: 'Price Dashboard fetches data from the Eurostat server, ensuring access to accurate and up-to-date statistical information.'
        },{
          name: 'Interactive Graphs',
          description: 'The web application processes the Excel file data to generate visually appealing and interactive graphs, providing a comprehensive visual representation of the Eurostat data.'
        },{
          name: 'Customizable Visualizations',
          description: 'Users can customize the appearance of the graphs, allowing for personalized and visually appealing presentations of the Eurostat data.'
        }
      ]
    }
    /*, {
      name: 'Video Quiz App',
      subName: '',
      description: `Web application with main objective is to develop a video question and answers module where users can watch videos and answer questions at specific timestamps.`,
      tools: ['Youtube Apis', 'HTML', 'CSS', 'JavaScript', 'Figma to HTML'],
      previewImageUrl: 'assets/projects/price-dashboard/price-dashboard.jpg',
      feedback: {
        companyName: 'SmartCookieWifi Inc.',
        clientName: 'Adrien Laurent',
        feedback: 'Once again Hamza did an excellent job.',
        rate: 5
      },
      gridImageUrls: ['assets/projects/prayertimes/prayertimes_web2.jpg', 'assets/projects/prayertimes/prayertimes_mobile.jpg', 'assets/projects/prayertimes/prayertimes_admin.jpg'],
      projectFeatures: [
        {
          name: 'Figma Design Integration',
          description: 'Implement the complete script using the design from the provided Figma file.'
        },{
          name: 'Responsive Mobile Pages',
          description: 'Create mobile pages that adapt to different screen sizes and devices.'
        },{
          name: 'Excel',
          description: 'Generate a object from excel file to store video links, questions (with timestamp), and answers.'
        },{
          name: 'Timestamp-based Pause and Play',
          description: 'Pause the video at designated timestamps and prompt users with questions & Correctly answered questions allow the video to resume seamlessly.'
        },{
          name: 'Video Selection Page',
          description: 'Create an initial page where users can select videos to watch from diffirent sections.'
        },{
          name: 'Animations and Features',
          description: 'Incorporate captivating animations and additional features as described in the Figma file.'
        }
      ]
    }*/
  ]

}
