import { Component, OnInit } from '@angular/core';
import {HostService} from '../../service/host.service';
import {ActivatedRoute} from '@angular/router';
import {HomeHost} from '../../home-host';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-infor-home-host',
  templateUrl: './infor-home-host.component.html',
  styleUrls: ['./infor-home-host.component.scss']
})
export class InforHomeHostComponent implements OnInit {
  item: HomeHost;
  image: any;
  private message: string;
  statusHomeForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private hostService: HostService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.statusHomeForm = this.fb.group({
      idHome: '',
      fromDate: '',
      toDate: '',
      status: '',
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.hostService.getHomebyId(id).subscribe(
      next => {
        this.item = next;
        this.image = next.imageUrls.split(' ');
        console.log(this.image);
      }, error3 => { this.message = 'không tồn tại'; }
    );
  }

  onSubmit() {
    if (this.statusHomeForm.valid) {
      const {value} = this.statusHomeForm;
      console.log(value.status);
      switch (value.status) {
        case '1':
          value.status = 'AVAILABLE';
          break;
        case '2':
          value.status = 'BOOKED';
          break;
        case '3':
          value.status = 'RENOVATING';
          break;
        default:
          value.status = 'AVAILABLE';
          break;
      }
      console.log(value);
      this.hostService.updateStatusHome(value)
        .subscribe(next => {
          console.log(next);
          this.message = 'Cap nhat thanh cong';
        }, error => this.message = 'Cap nhat khong thành công' ) ;
    }
  }
}
