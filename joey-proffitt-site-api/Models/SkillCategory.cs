using System;
using System.Collections.Generic;

namespace joey_proffitt_site_api.Models
{
    public class SkillCategory
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public string? Icon { get; set; }
        public string? BackgroundImage { get; set; }
        public ICollection<Skill> Skills { get; set; } = new List<Skill>();
    }
}
