import { Component } from '@angular/core';

@Component({
  selector: 'app-jammu-page1',
  templateUrl: './jammu-page1.component.html',
  styleUrls: ['./jammu-page1.component.scss']
})
export class JammuPage1Component {
  reserve(){
    alert('congratulation you have booked successfully');
  }
  first(evt: any){
    console.warn(evt);
  }
}
