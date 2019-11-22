import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProfile} from '../i-profile';
import {IRole} from '../i-role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  getRole(): Observable<IRole> {
    return this.http.get<IRole>(`${this.API_URL}/profile/role`);
  }
}
