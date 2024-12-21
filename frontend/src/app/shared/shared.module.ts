import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCallComponent } from './components/video-call/video-call.component';
import { ChatComponent } from './components/chat/chat.component';
import { SharedWindowComponent } from './components/shared-window/shared-window.component';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    VideoCallComponent,
    ChatComponent,
    SharedWindowComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
