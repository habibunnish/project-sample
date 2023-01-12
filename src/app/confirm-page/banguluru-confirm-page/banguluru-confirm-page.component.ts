import { Component } from '@angular/core';

@Component({
  selector: 'app-banguluru-confirm-page',
  templateUrl: './banguluru-confirm-page.component.html',
  styleUrls: ['./banguluru-confirm-page.component.scss']
})
export class BanguluruConfirmPageComponent {
  reserve() {
    alert('congratulation you have booked successfully');
    }
    first(evt: any){
      console.warn(evt);
    }
}
