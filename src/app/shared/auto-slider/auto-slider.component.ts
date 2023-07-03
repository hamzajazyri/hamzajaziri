import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auto-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto-slider.component.html',
  styleUrls: ['./auto-slider.component.scss']
})
export class AutoSliderComponent implements AfterViewInit {

  @Input() reverse = false;
  @ViewChild('sliderElem') sliderElem!: ElementRef<HTMLDivElement>;

  currentScroll = 0;
  ngAfterViewInit(): void {

    var maxScrollLeft = this.sliderElem.nativeElement.scrollWidth - this.sliderElem.nativeElement.clientWidth;
    var incrementVal = 20;
    // this.sliderElem.nativeElement.scrollLeft = 100;
    if (this.reverse) {
      incrementVal *= -1;
      this.sliderElem.nativeElement.scrollLeft = maxScrollLeft;
    }

    setInterval(() => {
      let scrollLeft = this.sliderElem.nativeElement.scrollLeft + incrementVal;
      this.sliderElem.nativeElement.scrollTo({
        left: scrollLeft,
        top: 0,
        behavior: 'smooth'
      });
      if( scrollLeft <= 0 || scrollLeft >= maxScrollLeft )
        incrementVal *= -1;
    }, 50);


    }

  }
