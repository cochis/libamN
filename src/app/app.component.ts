import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './sections/hero/hero.component';
import { BenefitsComponent } from './sections/benefits/benefits.component';
import { MainInfoComponent } from './sections/main-info/main-info.component';
import { EventsComponent } from './sections/events/events.component';
import { TeachersComponent } from './sections/teachers/teachers.component';
import { CostsComponent } from './sections/costs/costs.component';
import { MapLocationComponent } from './sections/map-location/map-location.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './shared/whatsapp-button/whatsapp-button.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, BenefitsComponent, MainInfoComponent, EventsComponent, TeachersComponent, CostsComponent, MapLocationComponent, FooterComponent, WhatsappButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'libamN';
}
