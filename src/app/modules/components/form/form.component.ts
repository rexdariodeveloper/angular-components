import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  // Form Bootstrap
  formBootstrap!: FormGroup;
  isFormBootstrapSubmitted: boolean = false;


  constructor(
    private _formBuilder: FormBuilder,
    public _validatorService: ValidatorService
  ) {
  }

  ngOnInit(): void {
    this.formBootstrap = this.createFormBootstrap();
  }

  // Form Bootstrap //
  createFormBootstrap(): FormGroup{
    let form = this._formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      apellidoPaterno: new FormControl('', [Validators.required])
    });

    return form;
  }

  onClickGuardarBootstrap(){
    if(this.formBootstrap.invalid){
      this.isFormBootstrapSubmitted = true;
      console.log(this._validatorService.getMessage(this.formBootstrap.controls['nombre']))
      return;
    }

    console.log('guardando correcto')
    console.log(this.formBootstrap.getRawValue());
  }

  ////////////////////

  isRequired(campo: string, form: FormGroup) {

    let form_field = form.get(campo);
    if (!form_field?.validator) {
        return false;
    }

    let validator = form_field?.validator({} as AbstractControl);
    return !!(validator && validator['required']);
  }
}
