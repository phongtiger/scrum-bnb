import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HomeHost} from '../interface/home-host';
import {JwtResponse} from '../interface/JwResponse';
import {Order} from '../interface/order';
import {IHomeOrder} from '../interface/i-home-order';
import {StatusListUser} from '../interface/StatusListUser';

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
  listTimeOrderHome(id: number): Observable <StatusListUser[]> {
  return this.http.get<StatusListUser[]>(`${this.API_URL}/api/status/${id}`); }
}
