import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelocationsAffectationComponent } from './relocations-affectation.component';

describe('RelocationsAffectationComponent', () => {
  let component: RelocationsAffectationComponent;
  let fixture: ComponentFixture<RelocationsAffectationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelocationsAffectationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelocationsAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
