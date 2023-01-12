import { Component } from '@angular/core';

@Component({
  selector: 'app-banguluru-page1',
  templateUrl: './banguluru-page1.component.html',
  styleUrls: ['./banguluru-page1.component.scss']
})
export class BanguluruPage1Component {
  reserve() {
    alert('congratulation you have booked successfully');
    }
    first(evt: any){
      console.warn(evt);
    }
}
