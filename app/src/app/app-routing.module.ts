import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WblComponent } from './wbl/wbl.component';
import { WwComponent } from './ww/ww.component';
import { RelComponent } from './rel/rel.component';
import { CodeComponent } from './code/code.component';


const routes: Routes = [
  { path: 'wbl', component: WblComponent },
  { path: 'ww', component: WwComponent },
   { path: 'rel', component: RelComponent },
   { path: 'code', component: CodeComponent },

  { path: '',   redirectTo: '/rel', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
