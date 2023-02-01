import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstSectionComponentComponent } from './first-section-component/first-section-component.component';
import { SecondSectionComponentComponent } from './second-section-component/second-section-component.component';
import { ThirdSectionComponentComponent } from './third-section-component/third-section-component.component';
import { CarouselSectionComponentComponent } from './carousel-section-component/carousel-section-component.component';
import { FourthSectionComponentComponent } from './fourth-section-component/fourth-section-component.component';
import { FifthSectionComponentComponent } from './fifth-section-component/fifth-section-component.component';
import { SixthSectionComponentComponent } from './sixth-section-component/sixth-section-component.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponentComponent,
    SecondSectionComponentComponent,
    ThirdSectionComponentComponent,
    CarouselSectionComponentComponent,
    FourthSectionComponentComponent,
    FifthSectionComponentComponent,
    SixthSectionComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
