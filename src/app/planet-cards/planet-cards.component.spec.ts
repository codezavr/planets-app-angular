import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetCardsComponent } from './planet-cards.component';

describe('PlanetCardsComponent', () => {
  let component: PlanetCardsComponent;
  let fixture: ComponentFixture<PlanetCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
