import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTripDialogComponent } from './add-trip-dialog.component';

describe('AddTripDialogComponent', () => {
  let component: AddTripDialogComponent;
  let fixture: ComponentFixture<AddTripDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTripDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTripDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
