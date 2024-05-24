import {Injectable} from '@angular/core';
import {Hero} from "../models/hero";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {

  public heroes: Hero[]

  constructor(private http: HttpClient) {
    this.heroes = []
    // this.heroes.push({
    //   id: 1,
    //   name: "Batman",
    //   image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg"
    // })
    // this.heroes.push({
    //   id: 2,
    //   name: "Wonder Woman",
    //   image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/720-wonder-woman.jpg"
    // })
    // this.heroes.push({
    //   id: 3,
    //   name: "Hulk",
    //   image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/332-hulk.jpg"
    // })
  }

  public getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>("https://akabab.github.io/superhero-api/api/all.json")
  }

  public getHeroById(id: number) {
    return this.http.get<Hero>(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
  }

}











