import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {
  @ViewChild('mySlider') slider: IonSlides;
  activeSlide = 0;

  constructor() {}

  ngOnInit() {}

  slideChanged(event) {
    this.slider.getActiveIndex().then((index: number) => {
      this.activeSlide = index;
    });
  }

  changeSlide(index: number){
    this.slider.update();
    this.slider.slideTo(index);
  }
}
