import { Injectable } from '@angular/core';
import { RandomNumbersService } from './example.service';
import { AnotherRandomNumberGeneratorService } from './example2.service';

@Injectable()
export class DependenciesService extends RandomNumbersService {

  //value: number = 99;

  constructor(public anotherGen: AnotherRandomNumberGeneratorService) {
    super(anotherGen);
  }

  updateValue() {
    console.log("Use DependenciesService's method Overrided")
    super.updateValue();
  }
}
