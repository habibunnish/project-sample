import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JammuConfirmPageComponent } from './jammu-confirm-page.component';

describe('JammuConfirmPageComponent', () => {
  let component: JammuConfirmPageComponent;
  let fixture: ComponentFixture<JammuConfirmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JammuConfirmPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JammuConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
