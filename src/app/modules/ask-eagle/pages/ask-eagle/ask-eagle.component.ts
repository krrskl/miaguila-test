import { Component, OnInit } from '@angular/core';
import { MapService } from '@core/services/map.service';

@Component({
  selector: 'app-ask-eagle',
  templateUrl: './ask-eagle.component.html',
  styleUrls: ['./ask-eagle.component.scss'],
})
export class AskEagleComponent implements OnInit {
  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.buildMap();
  }
}
