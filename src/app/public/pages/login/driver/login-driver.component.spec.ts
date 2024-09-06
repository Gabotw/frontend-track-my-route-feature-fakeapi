import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDriverComponent } from './login-driver.component';

describe('DriverComponent', () => {
  let component: LoginDriverComponent;
  let fixture: ComponentFixture<LoginDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginDriverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
