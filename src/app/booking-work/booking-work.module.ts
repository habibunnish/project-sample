import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { ChennaiLocationComponent } from './chennai-location/chennai-location.component';
import { BanguluruLocationComponent } from './banguluru-location/banguluru-location.component';
import { GoaLocationComponent } from './goa-location/goa-location.component';
import { JammuLocationComponent } from './jammu-location/jammu-location.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';




@NgModule({
  declarations: [
    BookingPageComponent,
    ChennaiLocationComponent,
    BanguluruLocationComponent,
    GoaLocationComponent,
    JammuLocationComponent,
    HomePageComponent,
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
    GoaLocationComponent,
    JammuLocationComponent]
})
export class BookingWorkModule { }
