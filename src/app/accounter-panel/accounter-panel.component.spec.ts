import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccounterPanelComponent } from './accounter-panel.component';

describe('AccounterPanelComponent', () => {
  let component: AccounterPanelComponent;
  let fixture: ComponentFixture<AccounterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccounterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccounterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
