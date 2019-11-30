import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IHome} from '../interface/i-home';
import {Observable} from 'rxjs';
import {HomeHost} from '../interface/home-host';
import {StatusSetByHost} from '../interface/statusSetByHost';
import {JwtResponse} from '../interface/JwResponse';
import {IHomeOrder} from '../interface/i-home-order';


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

  updateStatusHome(status: StatusSetByHost): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.API_URL}/api/status/set`, status);
  }
  getAllBookListOneHouseById(id: number): Observable<IHomeOrder[]> {
    return this.http.get<IHomeOrder[]>(`${this.API_URL}/api/host/listOrder/${id}`);
  }
}
