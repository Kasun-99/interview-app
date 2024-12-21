import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenteeRoutingModule } from './mentee-routing.module';
import { MenteeComponent } from './component/mentee.component';


@NgModule({
  declarations: [
    MenteeComponent
  ],
  imports: [
    CommonModule,
    MenteeRoutingModule
  ]
})
export class MenteeModule { }
