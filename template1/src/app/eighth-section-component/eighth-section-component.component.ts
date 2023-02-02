import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eighth-section-component',
  templateUrl: './eighth-section-component.component.html',
  styleUrls: ['./eighth-section-component.css'],
})
export class EighthSectionComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selected!: Date | null;
}
