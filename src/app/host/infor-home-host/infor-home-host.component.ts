import { Component, OnInit } from '@angular/core';
import {IHome} from '../../i-home';
import {HostService} from '../../service/host.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-infor-home-host',
  templateUrl: './infor-home-host.component.html',
  styleUrls: ['./infor-home-host.component.scss']
})
export class InforHomeHostComponent implements OnInit {
  infor: IHome;
  private message: string;
  constructor(private route: ActivatedRoute,
              private hostService: HostService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hostService.getHostHomebyId(id).subscribe(
      next => (
        this.infor = next
      ), error3 => { this.message = 'không tồn tại'; }
    );
  }

}
