import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IHome} from '../i-home';
import {IRole} from '../i-role';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HostService {
  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  getAllHomeOfHost(): Observable <IHome[]> {
    return this.http.get<IHome[]>(`${this.API_URL}/host/list/home`);
  }

  getHostHomebyId(id: number): Observable<IHome> {
    return this.http.get<IHome>(`${this.API_URL}/host/home/${id}`);
  }
}
