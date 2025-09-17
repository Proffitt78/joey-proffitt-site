using Microsoft.EntityFrameworkCore;
using joey_proffitt_site_api.Models;

namespace joey_proffitt_site_api.Data
{
    public class JoeyProffittDbContext : DbContext
    {
        public JoeyProffittDbContext(DbContextOptions<JoeyProffittDbContext> options) : base(options) { }

        public DbSet<SkillCategory> SkillCategories { get; set; }
        public DbSet<Skill> Skills { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SkillCategory>(entity =>
            {
                entity.HasKey(e => e.CategoryId);
                entity.Property(e => e.CategoryName).HasMaxLength(100);
                entity.Property(e => e.Icon).HasMaxLength(50);
            });

            modelBuilder.Entity<Skill>(entity =>
            {
                entity.HasKey(e => e.SkillId);
                entity.Property(e => e.SkillName).HasMaxLength(100);
                entity.Property(e => e.Icon).HasMaxLength(50);

                entity.HasOne(s => s.Category)
                      .WithMany(c => c.Skills)
                      .HasForeignKey(s => s.CategoryId);
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
