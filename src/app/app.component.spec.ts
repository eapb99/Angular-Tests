import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    component = new AppComponent();
  });

   it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain("UnitTest");
  });

  it("should variable title contain the name of project",()=>{
    let myVar: string = component.title;
    expect(myVar).toEqual("UnitTest");
  })

  it("should variable active is true",()=>{
    let myVar: string = component.title;
    expect(myVar).toBeTruthy("UnitTest");
  })

  it("should sum method return a expected value",()=>{
    let a: number = 10;
    let b: number = 105;
    let result: number =a+b;
    expect(component.sum(a,b)).toBe(result)
  })

  it("should exist a sum method",()=>{
    let metodo = spyOn(component,"sum")
    component.sum(10,10);
    expect(metodo).toHaveBeenCalled()
  })
});
