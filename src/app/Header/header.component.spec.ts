import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Functionality',()=>{
    const links = [
      {
        name:'Recipes'
      },
      {
        name:'Shopping'
      }
    ];

    it('should have a navigation with links',()=>{
      expect(links[0].name).toEqual(component.links[0].name);
      expect(links[1].name).toEqual(component.links[1].name);
    });

    it('should emit another emitter',()=> {
        const spyFunction = spyOn(component.emitFeatureSelected, 'emit');
        component.featureSelected('Recipes');
        component.featureSelected('Shopping');
        expect(spyFunction).toHaveBeenCalledWith('Recipes');
        expect(spyFunction).toHaveBeenCalledWith('Shopping');
    });
  });
});
