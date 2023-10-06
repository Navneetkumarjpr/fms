import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayticketComponent } from './displayticket.component';

describe('DisplayticketComponent', () => {
  let component: DisplayticketComponent;
  let fixture: ComponentFixture<DisplayticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayticketComponent]
    });
    fixture = TestBed.createComponent(DisplayticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
