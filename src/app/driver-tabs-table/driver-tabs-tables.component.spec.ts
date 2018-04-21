import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTabsTablesComponent } from './driver-tabs-tables.component';

describe('DriverTabsTablesComponent', () => {
  let component: DriverTabsTablesComponent;
  let fixture: ComponentFixture<DriverTabsTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverTabsTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTabsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
