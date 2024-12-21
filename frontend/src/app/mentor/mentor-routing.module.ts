import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorComponent } from './component/mentor.component';
import { ScheduleMeetingComponent } from './component/schedule-meeting/schedule-meeting.component';
import { ParticipantListComponent } from './component/participant-list/participant-list.component';

const routes: Routes = [
  { path: '', component: MentorComponent },
  { path: 'schedule-meeting', component: ScheduleMeetingComponent },
  { path: 'list', component: ParticipantListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
