import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationsComponents } from './simulations.component';

describe('SimulationsComponent', () => {
  let component: SimulationsComponents;
  let fixture: ComponentFixture<SimulationsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimulationsComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationsComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
