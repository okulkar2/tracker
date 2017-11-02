import { Component, OnInit } from '@angular/core'
import { Vehicle } from '../shared/vehicle.model'
import { VehicleService } from '../shared/vehicle.service'


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[];
  selectedVehicle: Vehicle;

  constructor(private vehicleService: VehicleService) {
    this.vehicleService.vehicleSelected.subscribe(
      (vehicle: Vehicle) => {
          this.selectedVehicle = vehicle;
      }
  )
  }

  ngOnInit() {
    this.vehicles = this.vehicleService.getVehicles();
  }

  onVehicleSelected(data: Vehicle) {
    this.selectedVehicle = data;
  }
}
