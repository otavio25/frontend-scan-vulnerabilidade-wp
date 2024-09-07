import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoPluginsComponent } from './pages/info-plugins/info-plugins.component';
import { InforTemaComponent } from './pages/infor-tema/infor-tema.component';
import { InforVersaoWpComponent } from './pages/infor-versao-wp/infor-versao-wp.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'infoplugins', component: InfoPluginsComponent },
    { path: 'infortema', component: InforTemaComponent },
    { path: 'inforversaowp', component: InforVersaoWpComponent },
    { path: 'relatorio', component: RelatorioComponent }
];
