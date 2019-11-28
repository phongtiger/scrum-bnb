import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './auth/token-storage.service';
import {RoleService} from './service/role.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private message = '';
  public taikhoan: number;
  constructor(private tokenStorage: TokenStorageService,
              private roleService: RoleService,
              private  router: Router) { }
  logout() { this.tokenStorage.signOut(); this.message = 'ban da dang xuat';
  }

  ngOnInit() {
    this.router.navigate(['login']);
  }

  showStatus(event: number) {
    this.taikhoan = event;
  }
}
