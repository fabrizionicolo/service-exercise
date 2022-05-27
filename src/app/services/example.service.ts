import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnotherRandomNumberGeneratorService } from './example2.service';

@Injectable()
export class RandomNumbersService {

  private valueSubject = new BehaviorSubject<number>(0);
  private valueAsObservable = this.valueSubject.asObservable();

  constructor(public anotherGen: AnotherRandomNumberGeneratorService) { }

  private setValue(value: number) {
    this.valueSubject.next(value);
  }

  getValues(): Observable<number> {
    return this.valueAsObservable;
  }

  updateValue(min = 0, max = 10) {
    min = Math.trunc(min);
    max = Math.trunc(max);
    const randomValue = min + Math.floor((max - min) * Math.random());
    this.setValue(randomValue);
  }
  
}
