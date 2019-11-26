import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IHome} from '../i-home';
import {HomeHost} from '../home-host';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  getAllHome(): Observable <HomeHost[]> {
    return this.http.get<HomeHost[]>(`${this.API_URL}/api/guest/all`);
  }
}
