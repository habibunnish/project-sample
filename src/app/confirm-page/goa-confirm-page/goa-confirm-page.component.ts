import { Component } from '@angular/core';

@Component({
  selector: 'app-goa-confirm-page',
  templateUrl: './goa-confirm-page.component.html',
  styleUrls: ['./goa-confirm-page.component.scss']
})
export class GoaConfirmPageComponent {
  reserve() {
    alert('congratulation you have booked successfully');
    }
    first(evt: any){
      console.warn(evt);
    }
    
}
