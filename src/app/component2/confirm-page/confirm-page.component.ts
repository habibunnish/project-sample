import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.scss']
})
export class ConfirmPageComponent {
  constructor(private router:Router){}
reserve() {
alert('congratulation you have booked successfully');
}
first(evt: any){
  console.warn(evt);
}
goaconfirmpage(){
  this.router.navigate(['goa-confirm-page'])
}

}
