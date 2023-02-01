import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-section-component',
  templateUrl: './third-section-component.component.html',
})
export class ThirdSectionComponentComponent implements OnInit {
  slides = [
    { url: '/assets/IMA-4.png',url2: '/assets/IMA-5.png'},
    { url: '/assets/IMA-5.png',url2: '/assets/IMA-4.png'},
    { url: '/assets/IMA-4.png',url2: '/assets/IMA-5.png'},
    { url: '/assets/IMA-5.png',url2: '/assets/IMA-4.png'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  getCurrentSlideUrl(index:number){
    return `url('${this.slides[index].url}')`;
  }
  getCurrentSlideUrl2(index:number){
    return `url('${this.slides[index].url2}')`;
  }
}
