import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanguluruPage1Component } from './banguluru-page1.component';

describe('BanguluruPage1Component', () => {
  let component: BanguluruPage1Component;
  let fixture: ComponentFixture<BanguluruPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanguluruPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanguluruPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
