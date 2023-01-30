import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import { Observable, startWith } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  sm: boolean = false;
  md: boolean = false;
  lg:boolean = false;
  ngOnInit(): void {
    this.onResize()
  }


  @HostListener("window:resize", [])
  onResize() {
    var width = window.innerWidth;
    if(width<768){
      console.log("movil "+this.sm)
      this.sm = true
      this.md = false
      this.lg = false
    }else if(width > 768 && width<1024){
      this.sm = false
      this.md = true
      this.lg = false
      console.log("es tablet "+this.md)
    }else{
      this.sm = false
      this.md = false
      this.lg = true
      console.log("es lg"+this.lg)
    }
  }
  title = 'template1';
  slides = [
    { url: '/assets/IMA-4.png',url2: '/assets/IMA-5.png'},
    { url: '/assets/IMA-5.png',url2: '/assets/IMA-4.png'},
    { url: '/assets/IMA-4.png',url2: '/assets/IMA-5.png'},
    { url: '/assets/IMA-5.png',url2: '/assets/IMA-4.png'},
  ];


  getCurrentSlideUrl(index:number){
    return `url('${this.slides[index].url}')`;
  }
  getCurrentSlideUrl2(index:number){
    return `url('${this.slides[index].url2}')`;
  }


}
