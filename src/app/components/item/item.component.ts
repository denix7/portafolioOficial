import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {

  nuevo:boolean = false;
  id:String;

  constructor(private _is:InformacionService,
              private router:Router,
              private activatedRoute: ActivatedRoute) {

                this.activatedRoute.params
                    .subscribe(parametros => {
                      console.log(parametros);

                      this.id = parametros['id'];
                    })
              }

  

}
