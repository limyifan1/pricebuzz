import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyalertsComponent } from './myalerts.component';

describe('MyalertsComponent', () => {
  let component: MyalertsComponent;
  let fixture: ComponentFixture<MyalertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyalertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyalertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
