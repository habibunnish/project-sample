import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { ChennaiLocationComponent } from './chennai-location/chennai-location.component';
import { BanguluruLocationComponent } from './banguluru-location/banguluru-location.component';
import { JammuLocationComponent } from './jammu-location/jammu-location.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoyapuramComponent } from './Goa/royapuram.component';


@NgModule({
  declarations: [
    BookingPageComponent,
    ChennaiLocationComponent,
    BanguluruLocationComponent,
    JammuLocationComponent,
    RoyapuramComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgbModule],
  exports: [
    BookingPageComponent,
    ChennaiLocationComponent,
    BanguluruLocationComponent,
    JammuLocationComponent,
    RoyapuramComponent,
   
  ],
})
export class BookingWorkModule {}
