import { Component, OnInit } from '@angular/core';
import {Order} from '../../../order';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../../service/account.service';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-order-home-user',
  templateUrl: './order-home-user.component.html',
  styleUrls: ['./order-home-user.component.scss']
})
export class OrderHomeUserComponent implements OnInit {
  orderForm: FormGroup;
  message: string;

  constructor(private userService: UserService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.orderForm = this.fb.group({
      id: '',
      house_id: '',
      tenant_id: '',
      checkin: ['', [Validators.required]],
      checkout: ['', [Validators.required]],
      numberGuest: ['', [Validators.required]],
      orderDate: ['', [Validators.required]],
    });
  }

  onSubmit() {
  }
}
