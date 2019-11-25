import {Component} from '@angular/core';
import {TokenStorageService} from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular8Firebase';
  description = 'Angular-Fire-Demo';
  private message = '';
  constructor(private tokenStorage: TokenStorageService) { }
  logout() { this.tokenStorage.signOut(); this.message = 'ban da dang xuat';
  }
}
