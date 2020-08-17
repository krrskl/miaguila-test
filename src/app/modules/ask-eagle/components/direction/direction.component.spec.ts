import { Store } from '@ngrx/store';
import { Direction } from '@core/models/direction.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionComponent } from './direction.component';

describe('DirectionComponent', () => {
  let component: DirectionComponent;
  let fixture: ComponentFixture<DirectionComponent>;

  const direction: Direction = {
    id: 'testeagle',
    name: 'Test direction',
    address: 'Any address',
    location: [100, 300],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectionComponent],
      providers: [
        {
          provide: Store,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionComponent);
    component = fixture.componentInstance;
    component.data = direction;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as name 'Test direction'`, () => {
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p.m-0').textContent).toEqual(direction.name);
  });

  it(`should have as address 'Any address'`, () => {
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('small').textContent).toEqual(
      direction.address,
    );
  });
});
