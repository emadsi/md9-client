import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballSchoolComponent } from './football-school.component';

describe('FootballSchoolComponent', () => {
  let component: FootballSchoolComponent;
  let fixture: ComponentFixture<FootballSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FootballSchoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
