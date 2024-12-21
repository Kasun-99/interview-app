import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mentor', loadChildren: () => import('./mentor/mentor.module').then(m => m.MentorModule) },
  { path: 'mentee', loadChildren: () => import('./mentee/mentee.module').then(m => m.MenteeModule) },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)},
  { path: '', redirectTo: 'mentor', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
