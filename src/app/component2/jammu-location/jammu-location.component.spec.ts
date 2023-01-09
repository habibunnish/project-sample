import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JammuLocationComponent } from './jammu-location.component';

describe('JammuLocationComponent', () => {
  let component: JammuLocationComponent;
  let fixture: ComponentFixture<JammuLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JammuLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JammuLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
