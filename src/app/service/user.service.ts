import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HomeHost} from '../interface/home-host';
import {JwtResponse} from '../interface/JwResponse';
import {Order} from '../interface/order';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  getAllHome(): Observable <HomeHost[]> {
    return this.http.get<HomeHost[]>(`${this.API_URL}/api/guest/all`);
  }

  orderHome(status: Order): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.API_URL}/api/order/create`, status);
  }
}
