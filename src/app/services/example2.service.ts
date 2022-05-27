import { Inject, Injectable } from "@angular/core";

@Injectable()
export class AnotherRandomNumberGeneratorService {

  value: number = 0;

  constructor() {
    Math.floor(900 * Math.random())
  }

  getValue() {
    return this.value;
  }
}
