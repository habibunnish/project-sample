import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banguluru-location',
  templateUrl: './banguluru-location.component.html',
  styleUrls: ['./banguluru-location.component.scss']
})
export class BanguluruLocationComponent {

  constructor(private router:Router){}
  banguluruconfirm1() {
    this.router.navigate(['banguluru-confirm-page'])
   }
   banguluruconfirm2(){
    this.router.navigate(['banguluru-page1'])
   }

}
