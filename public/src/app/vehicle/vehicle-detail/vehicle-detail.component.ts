import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../shared/vehicle.model';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  @Input() vehicleElement: Vehicle;

  constructor() {}

  ngOnInit() {
  }

}
