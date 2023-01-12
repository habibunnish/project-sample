import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennaiPage1Component } from './chennai-page1.component';

describe('ChennaiPage1Component', () => {
  let component: ChennaiPage1Component;
  let fixture: ComponentFixture<ChennaiPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChennaiPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChennaiPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
