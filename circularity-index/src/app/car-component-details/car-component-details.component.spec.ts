import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarComponentDetailsComponent } from './car-component-details.component';

describe('CarComponentDetailsComponent', () => {
  let component: CarComponentDetailsComponent;
  let fixture: ComponentFixture<CarComponentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarComponentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarComponentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
