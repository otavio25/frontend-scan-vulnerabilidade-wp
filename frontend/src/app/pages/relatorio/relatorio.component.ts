import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './relatorio.component.html',
  styleUrl: './relatorio.component.css'
})
export class RelatorioComponent {
  url: string = '';
  responseData: any;
  constructor(private http: HttpClient) {}

  async sendPostRequest() {
    const apiUrl = 'http://localhost:3333/relatorio';
    const body = { url: this.url };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    try {
      this.responseData = await this.http.post(apiUrl, body, { headers }).toPromise();
      console.log('Response:', this.responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
