import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostingComponent } from './admin-posting.component';

describe('AdminPostingComponent', () => {
  let component: AdminPostingComponent;
  let fixture: ComponentFixture<AdminPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
