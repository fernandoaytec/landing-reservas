import { Component, ViewEncapsulation } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';
import { ImageSliderComponent } from './imageSlider/components/imageSlider/imageSlider.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'template1';
  slides:SlideInterface[] = [
    { url: '/assets/IMA-4.png',url2: '/assets/IMA-5.png'},
    { url: '/assets/IMA-5.png',url2: '/assets/IMA-4.png'},
    { url: '/assets/IMA-4.png',url2: '/assets/IMA-5.png'},
    { url: '/assets/IMA-5.png',url2: '/assets/IMA-4.png'},
  ];

  ImageSliderComponent!: ImageSliderComponent;
  getCurrentSlideUrl(index:number){
    return `url('${this.slides[index].url}')`;
  }
  getCurrentSlideUrl2(index:number){
    return `url('${this.slides[index].url2}')`;
  }


}
