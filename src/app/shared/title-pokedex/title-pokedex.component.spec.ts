import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePokedexComponent } from './title-pokedex.component';

describe('TitlePokedexComponent', () => {
  let component: TitlePokedexComponent;
  let fixture: ComponentFixture<TitlePokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlePokedexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlePokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
