import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SolutionComponent } from './solution/form1/solution.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
	{ path: 'solution', component:  SolutionComponent},
	{ path: 'form', component:  FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
