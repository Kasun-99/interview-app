import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { WebrtcService } from '../../services/webrtc.service';

@Component({
  selector: 'app-shared-window',
  templateUrl: './shared-window.component.html',
  styleUrls: ['./shared-window.component.scss'],
})
export class SharedWindowComponent implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  activeTab: string = 'chat';
  chatMessage: string = '';
  participants: string[] = ['Norah', 'John Doe', 'Jane Smith'];
  isScreenSharing: boolean = false;
  isMicEnabled = true;
  isCameraEnabled = false;
  
  constructor(private webrtcService: WebrtcService) {}

  async ngOnInit() {
    const stream = await this.webrtcService.initializeMediaStream();
    if (stream) {
      this.videoElement.nativeElement.srcObject = stream;
    }
  }

  ngAfterViewInit() {
    if (this.videoElement) {
      console.log('Video element is ready!');
    } else {
      console.error('Video element is not found!');
    }
  }

  // Switch between tabs
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // Send a chat message (placeholder function)
  sendMessage() {
    if (this.chatMessage) {
      console.log('Message sent:', this.chatMessage);
      this.chatMessage = '';
    }
  }

  // Bottom control actions
  //toggleMic() {
  //   console.log('Mic toggled');
  // }

  // // Toggle between camera and screen share
  // async toggleCamera() {
  //   console.log('Camera toggled');
  //   await this.webrtcService.switchToCamera(this.videoElement.nativeElement);
  // }

  toggleMic() {
    this.isMicEnabled = this.webrtcService.toggleMic();
  }

  toggleCamera() {
    this.isCameraEnabled = this.webrtcService.toggleCamera();
  }

  // Toggle between screen sharing and webcam
  async toggleScreenShare() {
    if (this.isScreenSharing) {
      this.webrtcService.stopScreenShare(this.videoElement.nativeElement);
    } else {
      await this.webrtcService.startShareScreen(this.videoElement.nativeElement);
    }
    this.isScreenSharing = !this.isScreenSharing;
  }

  
}
