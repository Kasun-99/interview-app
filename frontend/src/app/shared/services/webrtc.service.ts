import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebrtcService {
  private _isScreenSharing: boolean = false;
  mediaStream: MediaStream | null = null;

  // Getter to access the isScreenSharing state
  get isScreenSharing(): boolean {
    return this._isScreenSharing;
  }

  // Start screen sharing
  async startShareScreen(videoElement: HTMLVideoElement): Promise<void> {
    console.log('Attempting to start screen sharing...');
    try {
      const stream = await (navigator.mediaDevices as any).getDisplayMedia({
        video: true,
        audio: true, // Optional: Enable if audio is required
      });

      this.mediaStream = stream;
      this._isScreenSharing = true;

      videoElement.srcObject = stream;

      // Stop screen share when user stops sharing the screen
      stream.getVideoTracks()[0].onended = () => {
        this.stopScreenShare(videoElement);
      };
    } catch (error) {
      console.error('Error starting screen share:', error);
    }
  }

  // Stop screen sharing
  stopScreenShare(videoElement: HTMLVideoElement): void {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => track.stop());
      this.mediaStream = null;
    }
    this._isScreenSharing = false;
    videoElement.srcObject = null;
  }

  // Toggle between screen sharing and webcam
  async toggleScreenShare(videoElement: HTMLVideoElement): Promise<void> {
    if (this._isScreenSharing) {
      this.stopScreenShare(videoElement);
    } else {
      await this.startShareScreen(videoElement);
    }
  }

  // Switch to webcam
  async switchToCamera(videoElement: HTMLVideoElement): Promise<void> {
    console.log('Camera toggled');
    if (this._isScreenSharing) {
      this.stopScreenShare(videoElement);
    }
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoElement.srcObject = stream;
    this.mediaStream = stream;
  }
}
