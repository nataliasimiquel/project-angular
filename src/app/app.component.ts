import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusService } from './service/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nimitz-front';
  buttonHidden = false;
  statusList: any[] = [];

  constructor(
    private router: Router,
    private statusService: StatusService
  ) {}

  ngOnInit(): void {
    this.getStatus();
  }

  getStatus(): void {
    this.statusService.getStatus()
      .subscribe((data: any) => {
        this.statusList = data;
        console.log("oq chega aqui", data);
      });
  }
}
