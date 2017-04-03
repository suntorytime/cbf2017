import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Firstsat pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'firstsat'
})
@Injectable()
export class Firstsat {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    value = value + 'hello'; // make sure it's a string
    return value.toLowerCase();
  }
}
