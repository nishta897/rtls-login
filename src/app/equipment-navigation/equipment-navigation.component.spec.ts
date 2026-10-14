import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentNavigationComponent } from './equipment-navigation.component';

describe('EquipmentNavigationComponent', () => {
  let component: EquipmentNavigationComponent;
  let fixture: ComponentFixture<EquipmentNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
