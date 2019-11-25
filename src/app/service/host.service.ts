import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IHome} from '../i-home';
import {Observable} from 'rxjs';
import {HomeHost} from '../home-host';


@Injectable({
  providedIn: 'root'
})
export class HostService {
  private readonly API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getAllHomeOfHost(idHost: number): Observable<HomeHost[]> {
    console.log(idHost);
    return this.http.get<HomeHost[]>(`${this.API_URL}/api/guest/host/${idHost}`);
  }

  getHomebyId(id: number): Observable<HomeHost> {
    return this.http.get<HomeHost>(`${this.API_URL}/api/guest/${id}`);
  }
}
