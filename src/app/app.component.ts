import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from './auth/token-storage.service';
import {RoleService} from './service/role.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private user: number;
  private message = '';

  constructor(private tokenStorage: TokenStorageService,
              private roleService: RoleService,
              private role: RoleService) {
  }

  logout() {
    this.tokenStorage.signOut();
    this.message = 'ban da dang xuat';
  }

  ngOnInit() {
    this.role.getRole().subscribe(next => {
      console.log(this.tokenStorage);
      this.tokenStorage.saveAuthorities(next.name);
      this.user = next.id;
      this.role.user = next.id;
      this.message = 'Lay duoc role';
    }, error => this.message = 'khong lay dk role');
  }

  // public isAuthenticated():boolean{
  //   return moment().isB
  // }+
}
