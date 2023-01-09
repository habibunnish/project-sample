import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanguluruLocationComponent } from './banguluru-location.component';

describe('BanguluruLocationComponent', () => {
  let component: BanguluruLocationComponent;
  let fixture: ComponentFixture<BanguluruLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanguluruLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanguluruLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
