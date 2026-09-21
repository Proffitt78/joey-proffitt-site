interface FocusedSkill {
  name: string
  icon: string
  description: string
}
interface FocusedSkillGroup {
  id: string
  title: string
  description: string
  skills: FocusedSkill[]
}

export const focusedSkills: FocusedSkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'My main focus: interfaces that look considered and work well.',
    skills: [
      { name: 'Vue & TypeScript', icon: 'mdi-vuejs', description: 'Building interfaces with reusable components and typed application code. Vue is my primary framework.' },
      { name: 'HTML, CSS & Less', icon: 'mdi-language-css3', description: 'Turning a design into a working layout, with attention to spacing, typography, and the details of an interface.' },
      { name: 'Responsive design', icon: 'mdi-responsive', description: 'Adapting layouts and interactions for phones, tablets, and desktops. This is a particular focus of my frontend work.' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & data',
    description: 'The backend technologies I use to power Cannopi.',
    skills: [
      { name: 'C# & REST APIs', icon: 'mdi-language-csharp', description: 'Cannopi uses backend services written in C# and REST APIs to connect its application logic to the frontend.' },
      { name: 'SQL & Entity Framework', icon: 'mdi-database-outline', description: 'Cannopi uses SQL for relational data and Entity Framework Core to connect its application models to the database.' },
      { name: 'Azure', icon: 'mdi-microsoft-azure', description: 'I deploy Cannopi’s web application and backend services in Azure, using GitHub Actions for deployment workflows.' },
    ],
  },
  {
    id: 'workflow',
    title: 'Design & development',
    description: 'Creative skills I’d love to use more, alongside my development experience.',
    skills: [
      { name: 'Git & GitHub', icon: 'mdi-github', description: 'Tracking changes, reviewing code, and working with branches. Both solo work and team projects benefit from a clear history.' },
      { name: 'Photoshop', icon: 'mdi-image-edit-outline', description: 'My strongest creative tool. I’m especially confident in Photoshop and would welcome a role with more image editing and visual design.' },
      { name: 'Illustrator & Premiere', icon: 'mdi-palette-outline', description: 'Confident with vector design and video editing, with room I’m eager to grow into. I’d enjoy making these a bigger part of my work.' },
    ],
  },
]
