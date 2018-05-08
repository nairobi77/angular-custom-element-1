import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
    <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
  </div>`
})
export class AppComponent {
  title = 'new world of web components';
}
