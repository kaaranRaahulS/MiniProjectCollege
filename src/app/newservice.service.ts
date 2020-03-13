import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor(private http: HttpClient) { }

  newfetchApi()
  {
   return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3541d3d97d94451cb64efcdc7186053a");
  }
}
