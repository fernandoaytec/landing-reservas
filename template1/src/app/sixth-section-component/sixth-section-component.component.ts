import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sixth-section-component',
  templateUrl: './sixth-section-component.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./sixth-section-component.component.scss'],
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
