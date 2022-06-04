import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formReactive: FormGroup;

  nombre: String = '';
  email: String = '';
  mensaje: String = '';
  resultado: String = '';

  constructor(private formBuilder: FormBuilder) {
    this.formReactive = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]], //si es una  validacion sin []
      email: ['' , Validators.required],
      mensaje: ['' , Validators.required],
      resultado:['' , Validators.required],
    });
  }

  //Guardamos todos los contactos
  arrayContacto: any = [];

  getValue(value: string) {
    return this.formReactive.get(value); //retorna todo el control
  }

  onResetForm() {
    this.formReactive.reset();
  }

  save() {

    //si es valido
    if (this.formReactive.valid) {
      //Crear el contacto
      let arrayCrearCliente = [
        this.nombre,
        this.email,
        this.mensaje,
        this.resultado
      ];

      console.log(arrayCrearCliente);

      //Guardar el contacto
      this.arrayContacto.push(arrayCrearCliente); //añadir otro valor
      console.log('Is valid');

      //poner los datos a null
      this.onResetForm();
    } else {
      console.log('Not valid');
    }


    let arrayCrearCliente = [
      this.nombre,
      this.email,
      this.mensaje,
      this.resultado,
    ];



  }
}
