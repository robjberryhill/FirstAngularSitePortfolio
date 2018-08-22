import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../shared/models/skill';
import { SkillsService } from '../../modules/skills/services/skills.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {
  skills: Skill;

  constructor(
    private route: ActivatedRoute,
    private skillService: SkillsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSkillId();  
  }

  getSkillId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.skillService.getId(id)
    .subscribe(skills => this.skills = skills);
  }

}
