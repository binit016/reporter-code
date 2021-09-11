import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminByCompanyIdComponent } from './admin-by-company-id.component';

describe('AdminByCompanyIdComponent', () => {
  let component: AdminByCompanyIdComponent;
  let fixture: ComponentFixture<AdminByCompanyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminByCompanyIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminByCompanyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
