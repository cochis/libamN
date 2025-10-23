import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  constructor(private scrollService: ScrollService) { }

  onScrollTo(elementId: string): void {
    this.scrollService.scrollTo(elementId);
  }
}