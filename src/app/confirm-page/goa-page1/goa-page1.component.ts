import { Component } from '@angular/core';

@Component({
  selector: 'app-goa-page1',
  templateUrl: './goa-page1.component.html',
  styleUrls: ['./goa-page1.component.scss']
})
export class GoaPage1Component {
  reserve(){
    alert('congratulation you have booked successfully');
  }
  first(evt: any){
    console.warn(evt);
  }
}
