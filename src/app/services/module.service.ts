import { Injectable } from '@angular/core';

/*@Injectable({
  providedIn: 'root'
})*/
export class ModuleService {

  constructor() { }

  private value = 10;

  getValue() {
    return this.value;
  }

  addTenToValue() {
    this.value += 10;
  }
}
