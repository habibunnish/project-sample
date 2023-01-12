import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoaConfirmPageComponent } from './goa-confirm-page.component';

describe('GoaConfirmPageComponent', () => {
  let component: GoaConfirmPageComponent;
  let fixture: ComponentFixture<GoaConfirmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoaConfirmPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoaConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
