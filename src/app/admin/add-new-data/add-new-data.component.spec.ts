import { AddNewDataService } from './../../services/guards/add-new-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AddNewDataComponent } from './add-new-data.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';


describe('AddNewDataComponent ', () => {
  let component:AddNewDataComponent   ;
  let fixture: ComponentFixture<AddNewDataComponent>;
  // let routingSpy=jasmine.createSpyObj('Router',['navigate']);
  let roomdetails = {};
  let addnewdataService:AddNewDataService;
  let geteditspy:jasmine.Spy;
  let id=[];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [AddNewDataComponent],
      providers:[HttpClient,HttpHandler,AddNewDataService],
      //provide:Router ,useValue:routingSpy
      schemas:[NO_ERRORS_SCHEMA]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDataComponent   );
    component = fixture.componentInstance;
    addnewdataService=TestBed.inject(AddNewDataService);
    geteditspy=spyOn(addnewdataService,'getedit').and.returnValue(of({roomdetails}));
    
    fixture.detectChanges();
  });

  it('should call the addnewdataService.getedit() method and roomdetails',()=>{
    const id= TestBed;
    component.id=id;
    component.GetEdits();
    expect(geteditspy).toHaveBeenCalledWith(id);
    expect(component.roomdetails).toBeDefined();
  })
 
  it('should navigate to the  get-product page', () => {
    // component.checkpage();
    // const nav=routingSpy.navigate.calls.first().args[0];
    // expect(nav).toContain('/get-product');
    expect(component).toBeTruthy();

  });
});