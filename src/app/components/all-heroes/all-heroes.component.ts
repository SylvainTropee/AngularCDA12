import {Component} from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";
import {Hero} from "../../models/hero";
import {RouterLink} from "@angular/router";
import {HeroApiService} from "../../services/hero-api.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-all-heroes',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    RouterLink,
    HttpClientModule
  ],
  providers : [HeroApiService],
  templateUrl: './all-heroes.component.html',
  styleUrl: './all-heroes.component.css'
})
export class AllHeroesComponent {

  public heroes: Array<Hero> //Hero[]

  constructor(private heroApiService: HeroApiService) {
    this.heroes = []
  }

  addHeroes() {
    this.heroApiService.getAllHeroes().subscribe(data => this.heroes = data)
  }
}










