import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.scss']
})
export class ScheduleMeetingComponent {
  meetingTitle = '';
  scheduledTime!: Date;

  constructor(private http: HttpClient) {}

  scheduleMeeting() {
    const meeting = { title: this.meetingTitle, scheduledTime: this.scheduledTime };
    this.http.post('/api/meetings', meeting).subscribe(response => {
      console.log('Meeting Scheduled:', response);
    });
  }
}
