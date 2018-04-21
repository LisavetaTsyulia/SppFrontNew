import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTabsTablesComponent } from './company-tabs-tables.component.ts';

describe('CompanyTabsTablesComponent', () => {
  let component: CompanyTabsTablesComponent;
  let fixture: ComponentFixture<CompanyTabsTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyTabsTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTabsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
