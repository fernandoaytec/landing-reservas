import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-fifth-section-component',
  templateUrl: './fifth-section-component.component.html',
})
export class FifthSectionComponentComponent implements OnInit {

  constructor() { }
  emailFormControl = new FormControl('', []);
  ngOnInit(): void {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}
}
