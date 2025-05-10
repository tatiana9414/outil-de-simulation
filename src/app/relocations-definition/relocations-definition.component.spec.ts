import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelocationsDefinitionComponent } from './relocations-definition.component';

describe('RelocationsDefinitionComponent', () => {
  let component: RelocationsDefinitionComponent;
  let fixture: ComponentFixture<RelocationsDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelocationsDefinitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelocationsDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
