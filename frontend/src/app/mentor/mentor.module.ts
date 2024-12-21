import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './component/mentor.component';
import { ScheduleMeetingComponent } from './component/schedule-meeting/schedule-meeting.component';
import { ParticipantListComponent } from './component/participant-list/participant-list.component';


@NgModule({
  declarations: [
    MentorComponent,
    ScheduleMeetingComponent,
    ParticipantListComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule
  ]
})
export class MentorModule { }
