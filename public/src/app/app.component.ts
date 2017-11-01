import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent  {
  feature: string = 'student';

  onFeatureSelected(data: string): void{
    this.feature = data;
  }


}
