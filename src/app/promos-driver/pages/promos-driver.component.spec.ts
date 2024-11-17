import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromosDriverComponent } from './promos-driver.component';

describe('PromosDriverComponent', () => {
  let component: PromosDriverComponent;
  let fixture: ComponentFixture<PromosDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromosDriverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromosDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
