import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private scrollService: ScrollService) { }

  onScrollTo(elementId: string): void {
    this.scrollService.scrollTo(elementId);
  }
}