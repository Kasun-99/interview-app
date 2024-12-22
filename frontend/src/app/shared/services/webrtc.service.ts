import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebrtcService {
  private _isScreenSharing: boolean = false;
  mediaStream: MediaStream | null = null;
  private isMicEnabled = true;
  private isCameraEnabled = false;


  async initializeMediaStream(): Promise<MediaStream | null> {
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

      // Disable the camera track by default
      const videoTracks = this.mediaStream.getVideoTracks();
      videoTracks.forEach((track) => (track.enabled = false));

      return this.mediaStream;
    } catch (error) {
      console.error('Error initializing media stream:', error);
      return null;
    }
  }

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

  getMediaStream(): MediaStream | null {
    return this.mediaStream;
  }

  toggleMic(): boolean {
    if (this.mediaStream) {
      const audioTracks = this.mediaStream.getAudioTracks();
      audioTracks.forEach((track) => (track.enabled = !track.enabled));
      this.isMicEnabled = audioTracks[0]?.enabled || false;
    }
    return this.isMicEnabled;
  }

  toggleCamera(): boolean {
    if (this.mediaStream) {
      const videoTracks = this.mediaStream.getVideoTracks();
      videoTracks.forEach((track) => (track.enabled = !track.enabled));
      this.isCameraEnabled = videoTracks[0]?.enabled || false;
    }
    return this.isCameraEnabled;
  }

  isMicActive(): boolean {
    return this.isMicEnabled;
  }

  isCameraActive(): boolean {
    return this.isCameraEnabled;
  }
}
