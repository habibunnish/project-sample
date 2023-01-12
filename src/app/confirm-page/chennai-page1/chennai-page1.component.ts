import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chennai-page1',
  templateUrl: './chennai-page1.component.html',
  styleUrls: ['./chennai-page1.component.scss']
})
export class ChennaiPage1Component {
  constructor(private router:Router){}
reserve() {
alert('congratulation you have booked successfully');
}
first(evt: any){
  console.warn(evt);
}
GoToBookingPage(){
  this.router.navigate(['chennai-location'])
}
}
