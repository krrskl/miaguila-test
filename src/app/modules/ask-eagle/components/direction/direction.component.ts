import { Component, OnInit, Input } from '@angular/core';
import { Direction } from '@core/models/direction.model';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss'],
})
export class DirectionComponent implements OnInit {
  @Input() public data: Direction;
  constructor() {}

  ngOnInit() {}
}
