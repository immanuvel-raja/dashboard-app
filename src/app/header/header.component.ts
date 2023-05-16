import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { TimeAgoPipe } from './time-ago.pipe';

@Component({
  selector: 'app-header',
  template: `
    <h2>Header Component</h2>
    <p>Current date: {{ currentDate | timeAgo }}</p>
  `
})
export class HeaderComponent implements OnInit {
  currentDate!: Date;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchCurrentDate();
  }

  fetchCurrentDate() {
    const apiUrl = 'https://us-central1-app-verstrade.cloudfunctions.net/vtApiDevServer/api/v1/utilities/server-time';
    this.http.get<any>(apiUrl).subscribe(response => {
      const serverTime = new Date(response.serverTime);
      this.currentDate = serverTime;
    });
  }
}

