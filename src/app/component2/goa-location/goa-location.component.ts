import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goa-location',
  templateUrl: './goa-location.component.html',
  styleUrls: ['./goa-location.component.scss']
})
export class GoaLocationComponent {
  constructor(private router:Router){}
 
 goaconfirmpage1() {
    this.router.navigate(['goa-confirm-page'])
}
goaconfirmpage2(){
  this.router.navigate(['goa-page1'])
}

}