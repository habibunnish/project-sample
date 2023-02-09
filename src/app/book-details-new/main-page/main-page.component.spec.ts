import { RouterTestingModule } from '@angular/router/testing';
import { MainPageComponent } from './main-page.component';
import { ComponentFixture, TestBed} from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('MainPageComponent ', () => {
  let component:MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      providers:[HttpClient,HttpHandler,RouterTestingModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 

  it('should click button with async',()=>{
    fixture.detectChanges();
    spyOn(component,'chennai');
    
    let buttonElement=fixture.debugElement.query(By.css('#c')).nativeElement;
    buttonElement.click();

    fixture.detectChanges();
     fixture.whenStable().then(()=>{
    expect(component.chennai).toHaveBeenCalled();
   })
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});