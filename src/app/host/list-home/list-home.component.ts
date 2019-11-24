import { Component, OnInit } from '@angular/core';
import {IHome} from '../../i-home';
import {HostService} from '../../service/host.service';
import {error} from 'util';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss']
})
export class ListHomeComponent implements OnInit {
  output: IHome[];
  info: IHome;
  message: string;
  constructor(private hostService: HostService) {
    this.hostService.getAllHomeOfHost().subscribe(next => {
      this.output = next;
    }, error1 => this.message = 'khong thanh cong');
  }
  ngOnInit() {
  }

}
