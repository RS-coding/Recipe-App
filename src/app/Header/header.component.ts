import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';
import{ link } from './navigation-bar/navigation.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public links = [
    new link(
      'Recipes',
      'icon1class'
    ),
    new link(
      'Shopping',
      'icon2class'
    )
  ];

  collapsed = true;
  @Output() emitFeatureSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  featureSelected(linkSelected: string){
    for(const link of this.links){
      const linkName = link.name;
      if( linkName === linkSelected){
        this.emitFeatureSelected.emit(linkSelected);
      }
    }
  }

}
