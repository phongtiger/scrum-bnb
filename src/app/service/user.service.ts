import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IHome} from '../i-home';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  getAllHome(): Observable <IHome[]> {
    return this.http.get<IHome[]>(`${this.API_URL}/host/list/home`);
  }
}
