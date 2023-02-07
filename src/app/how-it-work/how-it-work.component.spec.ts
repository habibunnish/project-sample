import { HowItWorkComponent } from './how-it-work.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('HowItWorkComponent ', () => {
  let component: HowItWorkComponent;
  let fixture: ComponentFixture<HowItWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItWorkComponent],
      providers:[HttpClient,HttpHandler],
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});