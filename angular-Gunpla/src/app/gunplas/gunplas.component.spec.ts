import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunplasComponent } from './gunplas.component';

describe('GunplasComponent', () => {
  let component: GunplasComponent;
  let fixture: ComponentFixture<GunplasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunplasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GunplasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
