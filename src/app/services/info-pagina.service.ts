import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo() {
      // leer archivo
      this.http.get('assets/data/data-pagina.json')
      .subscribe( resp => {
        this.info = resp;
        this.cargada = true;
      });
   }

   private cargarEquipo() {
      // leer de firebase
      this.http.get('https://angular-inproaci.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {
        this.equipo = resp;
      });

   }
}
