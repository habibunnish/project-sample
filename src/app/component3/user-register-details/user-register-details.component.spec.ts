import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterDetailsComponent } from './user-register-details.component';

describe('UserRegisterDetailsComponent', () => {
  let component: UserRegisterDetailsComponent;
  let fixture: ComponentFixture<UserRegisterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegisterDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegisterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
