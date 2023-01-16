import { Injectable, IterableDiffers } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorService {

  constructor(
  ) {
  }

  getMessage(field: AbstractControl): string{

    //if(valor.hasError('email')) return this.translate.instant('ERRORES_CAPTURA.ERROR_CORREO');
    if(field.hasError('required')) return 'Este campo es requerido.';
    //if(valor.hasError('maxlength')) return this.translate.instant("ERRORES_CAPTURA.ERROR_GENERAL_CARACTERES_MAXIMO").replace("#", valor.errors.maxlength.requiredLength);
    //if(valor.hasError('minlength')) return this.translate.instant("ERRORES_CAPTURA.ERROR_GENERAL_CARACTERES_MINIMO").replace("#", valor.errors.minlength.requiredLength);
    //if(valor.hasError('pattern'))   return this.translate.instant("ERRORES_CAPTURA.ERROR_FORMATO");
    //if(valor.hasError('letter')) return this.translate.instant("ERRORES_CAPTURA.CAMPO_SOLO_LETRAS");
    //if(valor.hasError('number')) return this.translate.instant("ERRORES_CAPTURA.CAMPO_SOLO_NUMEROS");
    //if(valor.hasError('max')) return this.translate.instant("ERRORES_CAPTURA.ERROR_GENERAL_NUMERO_MAXIMO").replace("#", valor.errors.max.max);
    //if(valor.hasError('min')) return this.translate.instant("ERRORES_CAPTURA.ERROR_GENERAL_NUMERO_MINIMO").replace("#", valor.errors.min.min);

    return '';
  }
}
