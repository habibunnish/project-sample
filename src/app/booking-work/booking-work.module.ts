import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { ChennaiLocationComponent } from './chennai-location/chennai-location.component';
import { BanguluruLocationComponent } from './banguluru-location/banguluru-location.component';
import { JammuLocationComponent } from './jammu-location/jammu-location.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { RoyapuramComponent } from './Goa/royapuram.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';


@NgModule({
  declarations: [
    BookingPageComponent,
    ChennaiLocationComponent,
    BanguluruLocationComponent,
    JammuLocationComponent,
    HomePageComponent,
    RoyapuramComponent,
    HowItWorkComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  
  ],
  exports:[
    BookingPageComponent,
    ChennaiLocationComponent,
    BanguluruLocationComponent,
    JammuLocationComponent,
    RoyapuramComponent,
    HowItWorkComponent
  ]
})
export class BookingWorkModule { }
