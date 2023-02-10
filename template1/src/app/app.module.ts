import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselSectionComponentComponent } from './carousel-section-component/carousel-section-component.component';
import { EighthSectionComponentComponent } from './eighth-section-component/eighth-section-component.component';
import { FifthSectionComponentComponent } from './fifth-section-component/fifth-section-component.component';
import { FirstSectionComponentComponent } from './first-section-component/first-section-component.component';
import { FourthSectionComponentComponent } from './fourth-section-component/fourth-section-component.component';
import { SecondSectionComponentComponent } from './second-section-component/second-section-component.component';
import { SeventhSectionComponentComponent } from './seventh-section-component/seventh-section-component.component';
import { SixthSectionComponentComponent } from './sixth-section-component/sixth-section-component.component';
import { ThirdSectionComponentComponent } from './third-section-component/third-section-component.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
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
    EighthSectionComponentComponent,
    SeventhSectionComponentComponent,
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
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatTooltipModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
