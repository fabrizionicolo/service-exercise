import { Inject, Injectable } from '@angular/core';
import { RandomNumbersService } from './example.service';

@Injectable()
export class HeroService {

  constructor(private randomService: RandomNumbersService, @Inject("value") private value: number) {
    console.log(">>>>>>>>>>>>>>> ", value)
  }

  getValue() {
    return this.value;
  }
}
