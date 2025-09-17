using joey_proffitt_site_api.Models;

namespace joey_proffitt_site_api.Interfaces
{
    public interface ISkillCategoryRepository
    {
        Task<IEnumerable<SkillCategory>> GetAllAsync();
        Task<SkillCategory?> GetByIdAsync(int id);
    }
}
