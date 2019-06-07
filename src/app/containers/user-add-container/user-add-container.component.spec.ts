import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddContainerComponent } from './user-add-container.component';

describe('UserAddContainerComponent', () => {
  let component: UserAddContainerComponent;
  let fixture: ComponentFixture<UserAddContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
