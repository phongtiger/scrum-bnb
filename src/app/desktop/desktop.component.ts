import {Component, Input, OnInit, Output} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {RoleService} from '../service/role.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {
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

// console.log(value);
  ngOnInit() {
    this.role.getRole().subscribe(next => {
      console.log(this.tokenStorage);
      this.tokenStorage.saveAuthorities(next.name);
      this.user = next.id;
      this.role.user = next.id;
      this.message = 'Lay duoc role';
    }, error => this.message = 'khong lay dk role');
  }

  checkuser($event) {
    this.user = $event;
  }
}

