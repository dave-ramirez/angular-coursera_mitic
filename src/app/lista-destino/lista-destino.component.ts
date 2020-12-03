import { Component, OnInit } from '@angular/core';
import { DestinoViajeModels } from '../models/destino-viaje.models';


@Component({
  selector: 'app-lista-destino',
  templateUrl: './lista-destino.component.html',
  styleUrls: ['./lista-destino.component.scss']
})
export class ListaDestinoComponent implements OnInit {

  destinos: DestinoViajeModels[];
  constructor() { 
    this.destinos = [];
  }

  ngOnInit() {
  }

  guardar(n:string,	u:string)	{
    this.destinos.push(new DestinoViajeModels(n,	u));
    return false;
  }

}
