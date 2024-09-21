import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDriverComponent } from './side-bar-driver.component';

describe('SideBarDriverComponent', () => {
  let component: SideBarDriverComponent;
  let fixture: ComponentFixture<SideBarDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBarDriverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBarDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
