import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  texto: string = 'Haz click en el modo de juego para ver su descripcion';
  current: string = '';
  validador: string = '';
  constructor() {

  }

  selector(str: string, current: string) {
    this.current = current;
    console.log(this.validador)
    console.log(this.current)
    if(current === 'online' && this.validador === 'online-checked') {
      console.log(this.validador)
      this.texto = 'ermano checkado'
      return
    }
    this.texto = str;
  }

  clickedOnline(){
    this.texto = 'En el juego de modo online deberas escoger entre tres textos, dos generadas por una IA y una escrita por un humano, cual es la que piensas que realmente fue escrito por un humano.';
  }
  clickedOffline(){
    this.texto = 'En el juego de modo offline se generara una situacion y sobre la misma tres testimonios generados por IA, uno de ellos es el correcto y tu deberas escogerlo.';

  }
}
