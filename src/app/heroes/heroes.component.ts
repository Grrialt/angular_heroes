import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        //async approach
        .subscribe(heroes => this.heroes = heroes); //why we say that this.heroes = heroes? We update the value of the current value.

    //sync approach
    //this.heroes = this.heroService.getHeroes();
  }
}
