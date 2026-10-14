import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Column1ABF00004Component } from './column1-abf00004.component';

describe('Column1ABF00004Component', () => {
  let component: Column1ABF00004Component;
  let fixture: ComponentFixture<Column1ABF00004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Column1ABF00004Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Column1ABF00004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
