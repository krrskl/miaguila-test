import { Component, OnInit } from '@angular/core';
import { MapService } from '@core/services/map.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { defaultData } from '@core/utils/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ask-eagle',
  templateUrl: './ask-eagle.component.html',
  styleUrls: ['./ask-eagle.component.scss'],
})
export class AskEagleComponent implements OnInit {
  stepIndex = 0;
  form: FormGroup;
  constructor(
    private mapService: MapService,
    private formBuilder: FormBuilder,
    private locationService: Location,
    private activeRoute: ActivatedRoute,
  ) {
    const { type, location } = this.activeRoute.snapshot.params;
    this.stepIndex = type === 'origin' ? 0 : 1;

    if (location) {
      console.log(location);
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      origin: defaultData(),
      destination: defaultData(),
    });

    this.mapService.buildMap();
  }

  changeStepper(stepper: any): void {
    const { label } = stepper.selected;

    this.locationService.replaceState(`ask-eagle/${label}/`);
  }
}
