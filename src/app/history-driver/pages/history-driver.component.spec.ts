import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDriverComponent } from './history-driver.component';

describe('HistoryDriverComponent', () => {
  let component: HistoryDriverComponent;
  let fixture: ComponentFixture<HistoryDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryDriverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
