import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProfile} from '../interface/i-profile';
import {IRole} from '../interface/i-role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  public user: number;
  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  getRole(): Observable<IRole> {
    return this.http.get<IRole>(`${this.API_URL}/profile/role`);
  }
}
