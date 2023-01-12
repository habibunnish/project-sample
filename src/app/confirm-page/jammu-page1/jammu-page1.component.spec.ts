import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JammuPage1Component } from './jammu-page1.component';

describe('JammuPage1Component', () => {
  let component: JammuPage1Component;
  let fixture: ComponentFixture<JammuPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JammuPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JammuPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
