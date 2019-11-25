import { Component, OnInit } from '@angular/core';
import {HomeHost} from '../../home-host';
import {ActivatedRoute} from '@angular/router';
import {HostService} from '../../service/host.service';

@Component({
  selector: 'app-detail-home-user',
  templateUrl: './detail-home-user.component.html',
  styleUrls: ['./detail-home-user.component.scss']
})
export class DetailHomeUserComponent implements OnInit {
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
