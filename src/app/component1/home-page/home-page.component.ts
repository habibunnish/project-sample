import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/guards/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers:[NgbCarouselConfig],
})
export class HomePageComponent  implements OnInit{
 constructor(config:NgbCarouselConfig){
  config.interval=4000;
  config.wrap=true;
  // config.keyboard=false;
  config.pauseOnHover=false;
 }
  ngOnInit(): void { }
 
}
