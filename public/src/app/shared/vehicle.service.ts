import { Vehicle } from './vehicle.model';
import { EventEmitter } from '@angular/core';


export class VehicleService {

    private vehicles: Vehicle[]  = [
        {
            vin: '1HGCR2F3XFA027534',
            make: 'HONDA',
            model: 'ACCORD',
            year: 2015,
            redlineRpm: 5500,
            maxFuelVolume: 15,
            lastServiceDate: '2017-05-25T17:31:25.268Z'
        },
    ];

    vehicleSelected = new EventEmitter<Vehicle>();

    getVehicles() {
        return this.vehicles;
    }

}
