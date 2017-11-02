import { Component, Input, OnInit } from '@angular/core'
import { Vehicle } from '../../shared/vehicle.model'
import { VehicleService } from '../../shared/vehicle.service'


@Component({
  selector: 'app-vehicle-list-item',
  templateUrl: './vehicle-list-item.component.html',
  styleUrls: ['./vehicle-list-item.component.css']
})

export class VehicleListItemComponent implements OnInit {

  @Input()element: Vehicle;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
  }

  onSelected() {
      this.vehicleService.vehicleSelected.emit(this.element);
  }

}
