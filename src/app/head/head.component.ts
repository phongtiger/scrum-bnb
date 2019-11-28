import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {RoleService} from '../service/role.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  @Input()
  taikhoan = 0 ;
  message: string;
  constructor(private tokenStorage: TokenStorageService,
              private roleService: RoleService,
              private router: Router) { }

  ngOnInit() {
    this.roleService.getRole().subscribe(next => {
      console.log(next);
      this.tokenStorage.saveAuthorities(next.name);
      this.taikhoan = next.id;
      this.message = 'Lay duoc role';
    }, error => this.message = 'khong lay dk role'); }
  logout() { this.tokenStorage.signOut();
  }
}
