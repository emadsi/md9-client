import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationPageComponent } from './cancellation-page.component';

describe('CancelReservationComponent', () => {
  let component: CancellationPageComponent;
  let fixture: ComponentFixture<CancellationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancellationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancellationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
