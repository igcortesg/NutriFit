import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActividadFisicaPage } from './actividad-fisica.page';

describe('ActividadFisicaPage', () => {
  let component: ActividadFisicaPage;
  let fixture: ComponentFixture<ActividadFisicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadFisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
