import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipe App';
  loadedFeature = 'Recipes';

  featureSelected(feature: string) {
    this.loadedFeature = feature;
  }
}
