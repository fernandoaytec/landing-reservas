import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import { HttpClientModule } from '@angular/common/http';
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ImageSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
