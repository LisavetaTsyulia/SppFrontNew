import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTablesComponent } from './tabs-tables.component';

describe('TabsTablesComponent', () => {
  let component: TabsTablesComponent;
  let fixture: ComponentFixture<TabsTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
