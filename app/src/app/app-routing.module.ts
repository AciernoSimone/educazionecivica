import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WblComponent } from './wbl/wbl.component';


const routes: Routes = [
  { path: 'wbl', component: WblComponent },

  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
