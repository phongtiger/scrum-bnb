import { Component, OnInit } from '@angular/core';
import {RoleService} from '../service/role.service';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  public host = 'ROLE_HOST';
  public user = 'ROLE_USER';
  public admin = 'ROLE_ADMIN';
  public message: string;
  public role: number;
  constructor(private roleService: RoleService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.roleService.getRole().subscribe(next => {
      console.log(next);
      this.tokenStorage.saveAuthorities(next.name);
      this.role = next.id;
      this.message = 'Lay duoc role';
    }, error => this.message = 'khong lay dk role'); }
}
