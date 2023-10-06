import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveticketComponent } from './removeticket.component';

describe('RemoveticketComponent', () => {
  let component: RemoveticketComponent;
  let fixture: ComponentFixture<RemoveticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveticketComponent]
    });
    fixture = TestBed.createComponent(RemoveticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

