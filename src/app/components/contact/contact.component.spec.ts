import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should empty email field be invalid', () => {
    const email = component.contactForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });
  it('should email field have required error', () => {
    let errors:any = {};
    const email = component.contactForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('should invalid email field have pattern error', () => {
    let errors:any = {};
    const email = component.contactForm.controls['email'];
    email.setValue('emanuel.');

    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('should name field have required error', () => {
    let errors:any = {};
    const policy = component.contactForm.controls['name'];
    errors = policy.errors || {};
    expect(errors['required']).toBeTruthy();
  });
});
