import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  

  pattern: any = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
  createForm(){
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.minLength(8),Validators.pattern(this.pattern)]),
      message: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]),
    })
  }
  contactForm: FormGroup;
  constructor() { 
    this.contactForm = this.createForm()
  }

  ngOnInit(): void {
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){
    if (this.contactForm.valid){
      console.log(this.contactForm.value)
      this.onResetForm()
    }else {
      console.log("Invalid")
    }
    const newContact = {
      name : "",
      email: ",",
      message : ""
    }
    
  }
}

