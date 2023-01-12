import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLoginDataComponent } from './get-login-data.component';

describe('GetLoginDataComponent', () => {
  let component: GetLoginDataComponent;
  let fixture: ComponentFixture<GetLoginDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLoginDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetLoginDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
