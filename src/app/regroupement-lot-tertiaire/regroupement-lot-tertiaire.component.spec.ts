import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegroupementLotTertiaireComponent } from './regroupement-lot-tertiaire.component';

describe('RegroupementLotTertiaireComponent', () => {
  let component: RegroupementLotTertiaireComponent;
  let fixture: ComponentFixture<RegroupementLotTertiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegroupementLotTertiaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegroupementLotTertiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
