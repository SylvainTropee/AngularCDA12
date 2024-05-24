import {Component, Inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Hero} from "../../models/hero";
import {HeroApiService} from "../../services/hero-api.service";
import {NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    NgIf,
    HttpClientModule
  ],
  providers : [HeroApiService],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  public id: string | null
  public hero: Hero | undefined

  constructor(
    private route: ActivatedRoute,
    private heroApiService: HeroApiService
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id != null) {
      this.heroApiService.getHeroById(+this.id).subscribe(hero => this.hero = hero)
    }
  }

}











