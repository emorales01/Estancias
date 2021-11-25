import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styles: [
  ]
})
export class ResgisterComponent {

   miFormulario: FormGroup = this.fb.group({
    name: ['Veroz', [ Validators.required]],
    email: ['test1@test.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]],
  });

  constructor(private fb: FormBuilder ) { }

  resgister () {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }

  
}
