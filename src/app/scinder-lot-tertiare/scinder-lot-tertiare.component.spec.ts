import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScinderLotTertiareComponent } from './scinder-lot-tertiare.component';

describe('ScinderLotTertiareComponent', () => {
  let component: ScinderLotTertiareComponent;
  let fixture: ComponentFixture<ScinderLotTertiareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScinderLotTertiareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScinderLotTertiareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
