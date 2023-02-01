import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-section-component',
  templateUrl: './sixth-section-component.component.html',
})
export class SixthSectionComponentComponent implements OnInit {

  constructor() { }
  show: boolean = false;
  ngOnInit(): void {
  }
  public showinfo(){
    this.show = true
  }
}
