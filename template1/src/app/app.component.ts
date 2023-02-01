import { Component, ViewEncapsulation, OnInit, HostListener, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, startWith } from 'rxjs';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {

}
