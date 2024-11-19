import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromoDialogComponent } from './add-promo-dialog.component';

describe('AddPromoDialogComponent', () => {
  let component: AddPromoDialogComponent;
  let fixture: ComponentFixture<AddPromoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPromoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPromoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
