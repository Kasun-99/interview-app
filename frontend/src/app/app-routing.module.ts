import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mentor', loadChildren: () => import('./mentor/mentor.module').then(m => m.MentorModule) },
  { path: 'mentee', loadChildren: () => import('./mentee/mentee.module').then(m => m.MenteeModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
