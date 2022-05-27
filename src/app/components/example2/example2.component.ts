import { Component, OnInit } from '@angular/core';
import { Dependencies2Service } from 'src/app/services/dependencies2.service';
import { RandomNumbersService } from 'src/app/services/example.service';
import { HeroService } from 'src/app/services/hero.service';
import { heroServiceProvider } from 'src/app/services/providers/hero.service.provider';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss'],
  providers: [
    { provide: RandomNumbersService, useClass: Dependencies2Service},
    heroServiceProvider
  ]
})
export class Example2Component implements OnInit {

  constructor(private service: RandomNumbersService, private heroService: HeroService) { }

  ngOnInit(): void {
    this.service.updateValue();

    console.log("print hero's value: ", this.heroService.getValue());
  }

}
