import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { link } from './navigation.model';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  @Input() links: link[];
  @Output() featureSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectLink(feature: string){
    this.featureSelected.emit(feature);
  }
}
