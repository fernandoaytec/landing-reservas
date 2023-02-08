import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-section-component',
  templateUrl: './third-section-component.component.html',
})
export class ThirdSectionComponentComponent implements OnInit {
  slides = [
    { url: '/assets/images/imagecarousel.png'},
    { url: '/assets/images/imagecarousel.png'},
    { url: '/assets/images/imagecarousel.png'},
    { url: '/assets/images/imagecarousel.png'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  getCurrentSlideUrl(index:number){
    return `url('${this.slides[index].url}')`;
  }
}
