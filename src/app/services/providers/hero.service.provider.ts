import { RandomNumbersService } from "../example.service";
import { AnotherRandomNumberGeneratorService } from "../example2.service";
import { HeroService } from "../hero.service";


const heroServiceFactory = (randomService: RandomNumbersService, Service: AnotherRandomNumberGeneratorService) =>
  new HeroService(randomService, Service.getValue());

export const heroServiceProvider =
  { provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [RandomNumbersService, AnotherRandomNumberGeneratorService]
  };
