import { Component, VERSION, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {
  property = {
    value: true
  };

  onClick() {
    this.property.value = !this.property.value;
  }
}
