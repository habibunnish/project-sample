import { AddNewDataService } from './../../services/guards/add-new-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
locationList: any=[];
  


  constructor(config: NgbCarouselConfig, private router: Router,private addnewService:AddNewDataService) {
    config.interval = 4000;
    config.wrap = true;
    config.pauseOnHover = false;
  }
  ngOnInit(){
    this.method()
  }
  // chennai() {
  //   this.router.navigate(['location1/'+'Chennai'])
  // }
  // goa() {
  //   this.router.navigate(['location1/'+'goa']);
  // }
  // banguluru() {
  //   this.router.navigate(['location1/'+'Banguluru']);
  // }
  // jammu() {
  //   this.router.navigate(['location1/'+'Jammu']);
  //}
  
  location(data :any){
    console.log(data);
    this.router.navigate([`location1/${data}`])
  }

  method(){
     console.log('method to display');
    this.addnewService.mainPage().subscribe(data=>{
      this.locationList=data;
      console.log(this.locationList);
      console.log(data);
     })
     
  }
  
 }
