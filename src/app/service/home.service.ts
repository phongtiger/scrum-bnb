import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IHome} from '../i-home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  createHome(home: Partial<IHome>): Observable<IHome> {
    return this.http.post<IHome>(`${this.API_URL}/api/home/create`, home);
  }
}
