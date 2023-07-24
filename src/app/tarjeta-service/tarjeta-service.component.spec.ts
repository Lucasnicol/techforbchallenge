import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaServiceComponent } from './tarjeta-service.component';

describe('TarjetaServiceComponent', () => {
  let component: TarjetaServiceComponent;
  let fixture: ComponentFixture<TarjetaServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaServiceComponent]
    });
    fixture = TestBed.createComponent(TarjetaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
