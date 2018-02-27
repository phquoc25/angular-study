import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
    this.heroService.getHeroes().subscribe((heroes) => this._heroes = heroes.slice(1, 5));
  }

}
