import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaconnageLotComponent } from './faconnage-lot.component';

describe('FaconnageLotComponent', () => {
  let component: FaconnageLotComponent;
  let fixture: ComponentFixture<FaconnageLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaconnageLotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaconnageLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
