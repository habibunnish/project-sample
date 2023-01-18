import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyapuramComponent } from './royapuram.component';

describe('RoyapuramComponent', () => {
  let component: RoyapuramComponent;
  let fixture: ComponentFixture<RoyapuramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyapuramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoyapuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
