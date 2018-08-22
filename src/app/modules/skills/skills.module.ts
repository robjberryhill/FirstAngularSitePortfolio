import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillDetailsComponent } from '../../components/skill-details/skill-details.component';
import { SkillRoutingModule } from './/skill-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SkillRoutingModule
  ],
  declarations: [
    SkillsComponent,
    SkillDetailsComponent
  ],
  exports: [SkillsComponent]
})
export class SkillsModule { }
