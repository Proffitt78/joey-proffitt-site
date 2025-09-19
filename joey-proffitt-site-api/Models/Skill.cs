namespace joey_proffitt_site_api.Models
{
    public class Skill
    {
        public int SkillId { get; set; }
        public int CategoryId { get; set; }
        public string SkillName { get; set; } = string.Empty;
        public string? Icon { get; set; }
        public DateTime CreatedAt { get; set; }
        public string? Details { get; set; }

        // navigation
        public SkillCategory? Category { get; set; }
    }
}
