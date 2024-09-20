import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-plugins',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './info-plugins.component.html',
  styleUrl: './info-plugins.component.css'
})
export class InfoPluginsComponent {
  url: string = '';
  responseData: any;
  isLoading: boolean = false;
  constructor(private http: HttpClient) {}

  async sendPostRequest() {
    this.isLoading = true;
    const apiUrl = 'http://localhost:3333/infoplugins';
    const body = { url: this.url };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    try {
      this.responseData = await this.http.post(apiUrl, body, { headers }).toPromise();
      console.log('Response:', this.responseData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.isLoading = false; // Desativar o estado de carregamento
    }
  }

  // Função para obter as chaves do objeto 'plugins'
  getPluginKeys(plugins: any): string[] {
    return Object.keys(plugins);
  }
}
