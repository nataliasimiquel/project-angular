import { Component, OnInit } from '@angular/core';
import { StatusService } from '../service/status.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  statusList: any[] = [];

  constructor(private statusService: StatusService) { }

  ngOnInit(): void {
    this.getStatus();
  }

  getStatus(): void {

    this.statusService.getStatus()
      .subscribe((data: any) => {
        this.statusList = data;
      });
  }
}
