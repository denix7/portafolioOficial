import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false //el pipe esta pendiente de los cambios que se hacen
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    let keys =[];

    for(let key in value){
      keys.push(key)
    }

    return keys;
  }

}
