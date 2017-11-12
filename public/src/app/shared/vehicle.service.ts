import { Vehicle } from './vehicle.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class VehicleService {

    public vehicleSelected = new EventEmitter<Vehicle>();

    constructor(private http: Http) {}

    getVehicles(): Observable<Vehicle[]> {
        return this.http.get('/api/vehicles')
                        .map(response => response.json())
                        .catch(error => Observable.throw(error.statusText));
    }

}
