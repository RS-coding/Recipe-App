import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./Header/header.component";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('AppComponent', () => {
  let fixture : ComponentFixture<AppComponent>;
  let component: AppComponent;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Recipe App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Recipe App');
  });

  describe( 'functionality', ()=>{

    const loadFeatureInit = 'Recipes';

    it('loadedFeature should be at first assigned to "Recipe"', () => {
      expect(loadFeatureInit).toEqual(component.loadedFeature);
    });

    it('should be called with "Recipe" the emitFeatureSelected emits', () => {
      spyOn( component, 'featureSelected');
      const linkSelected = de.query(By.directive(HeaderComponent));
      const comp = linkSelected.componentInstance;
      comp.emitFeatureSelected.emit('Recipes');
      expect(component.featureSelected).toHaveBeenCalledOnceWith('Recipes');
    });

    it('should be called with "Shopping" the emitFeatureSelected emits',()=>{
      spyOn( component, 'featureSelected');
      const linkSelected = de.query(By.directive(HeaderComponent));
      const comp = linkSelected.componentInstance;
      comp.emitFeatureSelected.emit('Shopping');
      expect(component.featureSelected).toHaveBeenCalledOnceWith('Shopping');
    });
  });

});
