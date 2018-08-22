import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SkillDetailsComponent } from '../../components/skill-details/skill-details.component';

const routes: Routes = [
  {
		path: 'detail/:id',
		component: SkillDetailsComponent
	}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class SkillRoutingModule { }
