import { Injectable } from '@angular/core';
import { Skill } from '../../../shared/models/skill';
import { Level } from '../../../shared/types/level.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name: 'Angular',
      level: Level.Advanced
    },
    {
      id: 1,
      name: 'JavaScript',
      level: Level.Expert
    },
    {
      id: 2,
      name: 'TypeScript',
      level: Level.Intermediate
    }
  ];
  getSkills = (): Observable<Skill[]> => {
    return of(this.skills);
  }; 
  getId(id: number): Observable<Skill> {
    return of(this.skills.find(skills => skills.id === id));
  }

  constructor() { }
}
