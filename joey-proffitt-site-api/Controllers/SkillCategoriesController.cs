using joey_proffitt_site_api.Interfaces;
using joey_proffitt_site_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace joey_proffitt_site_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SkillCategoriesController : ControllerBase
    {
        private readonly ISkillCategoryRepository _repository;

        public SkillCategoriesController(ISkillCategoryRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SkillCategory>>> GetAll()
        {
            var categories = await _repository.GetAllAsync();
            return Ok(categories);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SkillCategory>> GetById(int id)
        {
            var category = await _repository.GetByIdAsync(id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }
    }
}
