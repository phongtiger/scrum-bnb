import { Component, OnInit } from '@angular/core';
import {HostService} from '../../service/host.service';
import {ActivatedRoute} from '@angular/router';
import {HomeHost} from '../../home-host';

@Component({
  selector: 'app-infor-home-host',
  templateUrl: './infor-home-host.component.html',
  styleUrls: ['./infor-home-host.component.scss']
})
export class InforHomeHostComponent implements OnInit {
  item: HomeHost;
  private message: string;
  constructor(private route: ActivatedRoute,
              private hostService: HostService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hostService.getHomebyId(id).subscribe(
      next => (
        this.item = next
      ), error3 => { this.message = 'không tồn tại'; }
    );
  }

}
