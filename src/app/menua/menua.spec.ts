import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menua } from './menua';

describe('Menua', () => {
  let component: Menua;
  let fixture: ComponentFixture<Menua>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menua]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menua);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
