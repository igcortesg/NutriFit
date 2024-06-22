import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaComidaPage } from './nueva-comida.page';

describe('NuevaComidaPage', () => {
  let component: NuevaComidaPage;
  let fixture: ComponentFixture<NuevaComidaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaComidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
