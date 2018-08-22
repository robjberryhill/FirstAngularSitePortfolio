import { SkillRoutingModule } from './skill-routing.module';

describe('SkillRoutingModule', () => {
  let skillRoutingModule: SkillRoutingModule;

  beforeEach(() => {
    skillRoutingModule = new SkillRoutingModule();
  });

  it('should create an instance', () => {
    expect(skillRoutingModule).toBeTruthy();
  });
});
