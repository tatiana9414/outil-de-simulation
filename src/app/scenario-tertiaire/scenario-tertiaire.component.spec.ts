import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioTertiaireComponent } from './scenario-tertiaire.component';

describe('ScenarioTertiaireComponent', () => {
  let component: ScenarioTertiaireComponent;
  let fixture: ComponentFixture<ScenarioTertiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScenarioTertiaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScenarioTertiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
