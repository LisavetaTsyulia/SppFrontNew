import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesTableComponent } from './companies-table.component';

describe('CompaniesTableComponent', () => {
  let component: CompaniesTableComponent;
  let fixture: ComponentFixture<CompaniesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
