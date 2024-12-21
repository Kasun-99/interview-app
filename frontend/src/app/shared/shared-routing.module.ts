import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedWindowComponent } from './components/shared-window/shared-window.component';

const routes: Routes = [
  { path: '', component: SharedWindowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
