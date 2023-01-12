import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoaPage1Component } from './goa-page1.component';

describe('GoaPage1Component', () => {
  let component: GoaPage1Component;
  let fixture: ComponentFixture<GoaPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoaPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoaPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
