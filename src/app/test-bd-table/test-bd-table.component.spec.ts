import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBdTableComponent } from './test-bd-table.component';

describe('TestBdTableComponent', () => {
  let component: TestBdTableComponent;
  let fixture: ComponentFixture<TestBdTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBdTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
