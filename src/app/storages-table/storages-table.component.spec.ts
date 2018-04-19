import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragesTableComponent } from './storages-table.component';

describe('StoragesTableComponent', () => {
  let component: StoragesTableComponent;
  let fixture: ComponentFixture<StoragesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoragesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
