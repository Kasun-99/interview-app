import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { WebrtcService } from '../../services/webrtc.service';

@Component({
  selector: 'app-shared-window',
  templateUrl: './shared-window.component.html',
  styleUrls: ['./shared-window.component.scss'],
})
export class SharedWindowComponent implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  activeTab: string = 'chat'; // Default active tab
  chatMessage: string = ''; // Message input
  participants: string[] = ['Norah', 'John Doe', 'Jane Smith']; // Dummy participants list
  isScreenSharing: boolean = false;
  
  constructor(private webrtcService: WebrtcService) {}

  // This lifecycle hook is called once the view is initialized
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
      this.chatMessage = ''; // Clear input
    }
  }

  // Bottom control actions
  toggleMic() {
    console.log('Mic toggled');
  }

  // Toggle between camera and screen share
  async toggleCamera() {
    console.log('Camera toggled');
    await this.webrtcService.switchToCamera(this.videoElement.nativeElement);
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

  // Initialize the camera stream on component load
  private async initializeCamera() {
    await this.webrtcService.switchToCamera(this.videoElement.nativeElement);
  }
}
