import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  template: `
    <h2>Footer Component</h2>
    <p>Date from header component directive: <span appTimeAgo [date]="currentDate"></span></p>
  `
})
export class FooterComponent implements OnInit {
  currentDate: Date | null = null;

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


