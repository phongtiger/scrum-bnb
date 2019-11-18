import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TokenStorageService} from '../auth/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IProfile} from '../i-profile';
import {ProfileService} from '../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  acc: IProfile;
  data: FormGroup;
  token: string;
  message: string;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private profileService: ProfileService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.data = this.fb.group({
      token: '',
      name: '',
      phone: '',
      address: '',
      avatar: ''
    })
    ;
    this.token = this.tokenStorage.getToken();
    this.profileService.getOneAccToken().subscribe(
      next => {
        this.acc = next;
        this.data.patchValue(this.acc);
      },
      error => {
        this.acc = null;
      }
    );
  }
  editMember() {
    this.profileService.updateAcc(this.data.value).subscribe(next => {
      this.message = 'Update success';
    });
  }
  logout() { this.tokenStorage.signOut(); this.message = 'Bạn đã đăng xuất';
  }

}
