using joey_proffitt_site_api.Data;
using joey_proffitt_site_api.Models;
using joey_proffitt_site_api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace joey_proffitt_site_api.Repositories
{
    public class SkillCategoryRepository : ISkillCategoryRepository
    {
        private readonly JoeyProffittDbContext _context;

        public SkillCategoryRepository(JoeyProffittDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SkillCategory>> GetAllAsync()
        {
            return await _context.SkillCategories
                         .Include(c => c.Skills)
                         .ToListAsync();
        }

        public async Task<SkillCategory?> GetByIdAsync(int id)
        {
            return await _context.SkillCategories
                                 .Include(c => c.Skills)
                                 .FirstOrDefaultAsync(c => c.CategoryId == id);
        }
    }
}
