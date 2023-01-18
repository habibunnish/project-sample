import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookedDetailsComponent } from './user-booked-details.component';

describe('UserBookedDetailsComponent', () => {
  let component: UserBookedDetailsComponent;
  let fixture: ComponentFixture<UserBookedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBookedDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBookedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
