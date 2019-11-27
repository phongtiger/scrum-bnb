import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {
  message: string;

  constructor(    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit() {
  }
  logout() {
    this.tokenStorage.signOut();
  }
}
