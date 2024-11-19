import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsDriverComponent } from './notifications-driver.component';

describe('NotificationsDriverComponent', () => {
  let component: NotificationsDriverComponent;
  let fixture: ComponentFixture<NotificationsDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationsDriverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationsDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
