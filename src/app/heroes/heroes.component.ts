import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private _heroes: Hero[];

  constructor(private heroService: HeroService) { 
  }

  ngOnInit() {
    this.getHeroes();
  }

  get heroes(): Hero[] {
    return this._heroes;
  }

  private getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => this._heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {
      return;
    }
    this.heroService.addHero({name} as Hero).subscribe((hero) => this._heroes.push(hero));
  }

  delete(hero: Hero | number): void {
    const id = typeof hero === 'number' ? hero : hero.id;
    this.heroService.deleteHero(hero).subscribe(
      () => this._heroes = this._heroes.filter(h => h.id !== id)
    );
  }
}
