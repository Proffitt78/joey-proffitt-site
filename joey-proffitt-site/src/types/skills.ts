export interface Skill {
  skillId: number;
  categoryId: number;
  skillName: string;
  icon: string;
  createdAt: string;
  details: string;
  category?: SkillCategory | null; // optional to match API
}

export interface SkillCategory {
  categoryId: number;
  categoryName: string;
  description: string;
  createdAt: string;
  icon: string;
  backgroundImage: string;
  skills: Skill[];
}
