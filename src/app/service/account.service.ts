import { Injectable } from '@angular/core';
import {IRegister} from '../interface/i-register';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  createAcc(user: Partial<IRegister>): Observable<IRegister> {
    return this.http.post<IRegister>(`${this.API_URL}/api/auth/signup`, user);
  }
}
