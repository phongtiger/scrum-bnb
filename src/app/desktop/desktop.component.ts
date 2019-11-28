import {Component, Input, OnInit, Output} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {RoleService} from '../service/role.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {
  message: string;
  user: string;
  @Input()
  blabla: number;
  constructor(    private tokenStorage: TokenStorageService,
                  private role: RoleService,
  ) { }

  ngOnInit() {

  }
  logout() {
    this.tokenStorage.signOut();
  }
}
