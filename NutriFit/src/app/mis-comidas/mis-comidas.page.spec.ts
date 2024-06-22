import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisComidasPage } from './mis-comidas.page';

describe('MisComidasPage', () => {
  let component: MisComidasPage;
  let fixture: ComponentFixture<MisComidasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisComidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
