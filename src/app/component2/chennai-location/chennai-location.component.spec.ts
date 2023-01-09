import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennaiLocationComponent } from './chennai-location.component';

describe('ChennaiLocationComponent', () => {
  let component: ChennaiLocationComponent;
  let fixture: ComponentFixture<ChennaiLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChennaiLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChennaiLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
