import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoPanelComponent } from './userinfo-panel.component';

describe('UserinfoPanelComponent', () => {
  let component: UserinfoPanelComponent;
  let fixture: ComponentFixture<UserinfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
