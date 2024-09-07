import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { InfoPluginsComponent } from './pages/info-plugins/info-plugins.component';
import { InforTemaComponent } from './pages/infor-tema/infor-tema.component';
import { InforVersaoWpComponent } from './pages/infor-versao-wp/infor-versao-wp.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent, FooterComponent, InfoPluginsComponent, InforTemaComponent, InforVersaoWpComponent, RelatorioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
