import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-section-component',
  templateUrl: './second-section-component.component.html',
})
export class SecondSectionComponentComponent implements OnInit {

  sm: boolean = false;
  md: boolean = false;
  lg:boolean = false;
  constructor() { }

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
}
