import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SkillsComponent } from './modules/skills/components/skills/skills.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ContactsComponentComponent } from './modules/contacts/components/contacts-component/contacts-component.component';
import { SkillDetailsComponent } from './components/skill-details/skill-details.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: 'contacts',
    component: ContactsComponentComponent
  },
  {
		path: 'skills',
		component: SkillsComponent
	},
	{
		path: 'greeting',
		component: GreetingComponent
  },
	{
		path: '',
		redirectTo: '/greeting',
		pathMatch: 'full'
	}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
