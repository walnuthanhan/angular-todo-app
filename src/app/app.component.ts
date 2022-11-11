import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TechSpike: Angular-Todo-App';
  exampleInjection = "This variable was injected into app.component.html from App Component class of app.component.ts using {{exampleInjection}}!";

}
