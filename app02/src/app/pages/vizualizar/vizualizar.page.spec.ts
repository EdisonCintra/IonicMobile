import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VizualizarPage } from './vizualizar.page';

describe('VizualizarPage', () => {
  let component: VizualizarPage;
  let fixture: ComponentFixture<VizualizarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
