import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info: any = {};
  cargada: boolean = false;
  cargada_sobre_nostros: boolean = false;
  images:any[] = [];

  constructor( public http:HttpClient ) {
    this.carga_info();
    this.carga_sobre_nosotros();
   }

   public carga_info(){
    this.http.get("assets/data/info.pagina.json")
        .subscribe(data => {
          //console.log(data);
          this.cargada = true;
          this.info = data;
        })
   }

   public carga_sobre_nosotros(){
    this.http.get("https://portafoliodennis-e5901.firebaseio.com/images.json")
        .subscribe(data => {
          this.cargada_sobre_nostros = true;
          console.log(data);
          this.images = data as any;
        })
   }

   public getItems(){
     return this.http.get("https://portafoliodennis-e5901.firebaseio.com/items.json")
   }
}
