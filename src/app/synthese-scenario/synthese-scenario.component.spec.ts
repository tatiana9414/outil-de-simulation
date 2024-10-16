import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseScenarioComponent } from './synthese-scenario.component';

describe('SyntheseScenarioComponent', () => {
  let component: SyntheseScenarioComponent;
  let fixture: ComponentFixture<SyntheseScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SyntheseScenarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyntheseScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
