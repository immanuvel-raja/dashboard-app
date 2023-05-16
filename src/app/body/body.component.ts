import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  template: `
    <h2>Body Component</h2>
    <p>Formatted date: {{ currentDate | date: 'dd MMMM, yyyy (hh:mm a)' }}</p>
  `
})
export class BodyComponent implements OnInit {
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


