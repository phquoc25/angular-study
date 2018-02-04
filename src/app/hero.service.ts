import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Heroes get fetched successfully from server.');
    return of(HEROES);
  }

  getHero(id): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    const heroFound = HEROES.find((hero) => hero.id === id);
    return of(heroFound);
  }
}
