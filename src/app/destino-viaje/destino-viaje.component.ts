import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DestinoViajeModels } from '../models/destino-viaje.models';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.scss']
})
export class DestinoViajeComponent implements OnInit {

  @Input() destino: DestinoViajeModels;
  @HostBinding('attr.class') cssClass = 'col-md-4'
  constructor() { 
  }

  ngOnInit() {
  }

}
