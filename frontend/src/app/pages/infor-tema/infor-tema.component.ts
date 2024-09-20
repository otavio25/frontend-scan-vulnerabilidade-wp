import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-infor-tema',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './infor-tema.component.html',
  styleUrl: './infor-tema.component.css'
})
export class InforTemaComponent {
  url: string = '';
  responseData: any;
  isLoading: boolean = false;
  constructor(private http: HttpClient) {}

  async sendPostRequest() {
    this.isLoading = true;
    const apiUrl = 'http://localhost:3333/infotema';
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
}
