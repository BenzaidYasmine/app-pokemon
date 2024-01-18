// services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonFilePath = 'assets/data/cards.json';

  constructor(private http: HttpClient,
    private _httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.jsonFilePath);
  }


}
