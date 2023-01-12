import { Component } from '@angular/core';

@Component({
  selector: 'app-jammu-confirm-page',
  templateUrl: './jammu-confirm-page.component.html',
  styleUrls: ['./jammu-confirm-page.component.scss']
})
export class JammuConfirmPageComponent {
  reserve() {
    alert('congratulation you have booked successfully');
    }
    first(evt: any){
      console.warn(evt);
    }
    
}
