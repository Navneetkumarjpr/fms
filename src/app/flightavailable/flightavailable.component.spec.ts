import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightavailableComponent } from './flightavailable.component';

describe('FlightavailableComponent', () => {
  let component: FlightavailableComponent;
  let fixture: ComponentFixture<FlightavailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightavailableComponent]
    });
    fixture = TestBed.createComponent(FlightavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
