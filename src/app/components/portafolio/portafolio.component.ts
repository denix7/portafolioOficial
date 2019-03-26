import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent {

  items:any[] = [];
  loading:boolean = true;
  constructor(private _is:InformacionService) {

    this._is.getItems()
        .subscribe(items => {
          this.items = items as any
          console.log(items)
          this.loading = false;
        })
   }
    


}
