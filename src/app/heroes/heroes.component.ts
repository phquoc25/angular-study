import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private _heroes = HEROES;
  private _selectedHero: Hero;

  constructor() { 
  }

  ngOnInit() {
    
  }

  get heroes(): Hero[] {
    return this._heroes;
  }

  get selectedHero(): Hero {
    return this._selectedHero;
  }

  set selectedHero(hero) {
    this._selectedHero = hero;
  }

  onSelect(hero): void {
    this.selectedHero = hero;
  }

}
