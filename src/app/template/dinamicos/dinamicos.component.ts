import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  persona: Persona = {
    nombre: 'Alex',
    favoritos: [
      {
        id: 1,
        nombre: 'Red Read Redemption 2',
      },
      {
        id: 2,
        nombre: 'Counter Strike: Global Offensive',
      },
    ],
  };

  guardar() {
    console.log('Formulario posteado');
  }
}
