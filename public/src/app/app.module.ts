import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListItemComponent } from './vehicle/vehicle-list-item/vehicle-list-item.component';
import { VehicleDetailComponent } from './vehicle/vehicle-detail/vehicle-detail.component';
import { HeaderComponent } from './header/header.component';
import { VehicleService } from './shared/vehicle.service';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    VehicleListItemComponent,
    VehicleDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
