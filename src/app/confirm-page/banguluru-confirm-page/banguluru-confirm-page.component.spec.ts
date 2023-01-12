import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanguluruConfirmPageComponent } from './banguluru-confirm-page.component';

describe('BanguluruConfirmPageComponent', () => {
  let component: BanguluruConfirmPageComponent;
  let fixture: ComponentFixture<BanguluruConfirmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanguluruConfirmPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanguluruConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
