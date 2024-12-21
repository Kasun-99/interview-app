import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  constructor(
    private hubConnection: signalR.HubConnection

  ) {}

  startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/meetingHub')
      .build();

    this.hubConnection.start()
      .then(() => console.log('SignalR connected'))
      .catch(err => console.error('SignalR connection error', err));
  }

  joinMeeting(meetingId: string, userName: string) {
    this.hubConnection.invoke('JoinMeeting', meetingId, userName);
  }

  onUserJoined(callback: (userName: string) => void) {
    this.hubConnection.on('UserJoined', callback);
  }
}
