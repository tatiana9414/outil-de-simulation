import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationHypothesesCalculComponent } from './validation-hypotheses-calcul.component';

describe('ValidationHypothesesCalculComponent', () => {
  let component: ValidationHypothesesCalculComponent;
  let fixture: ComponentFixture<ValidationHypothesesCalculComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidationHypothesesCalculComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationHypothesesCalculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
