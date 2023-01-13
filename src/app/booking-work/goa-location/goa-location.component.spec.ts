import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoaLocationComponent } from './goa-location.component';

describe('GoaLocationComponent', () => {
  let component: GoaLocationComponent;
  let fixture: ComponentFixture<GoaLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoaLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoaLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
