using Microsoft.AspNetCore.Mvc;

namespace joey_proffitt_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FunFactsController : ControllerBase
    {
        private static readonly string[] FunFacts =
        {
            "Joey once built a full-stack app in a weekend.",
            "This portfolio API is powered by ASP.NET Core & Azure.",
            "Joey prefers clean, type-safe code (and coffee ☕).",
            "The frontend uses Vue + Pinia for state management.",
            "This fun fact came straight from the API!",
            "Joey loves photography and has taken thousands of photos.",
            "Drumming is Joey’s favorite way to blow off steam. 🥁",
            "Joey can switch from guitar riffs to SQL queries seamlessly.",
            "Digital art is one of Joey’s creative outlets. 🎨",
            "He once sketched an entire comic strip in a single night.",
            "Joey has edited photos until 3 AM just to get the colors right.",
            "His camera roll is 80% landscapes and 20% code screenshots.",
            "Sometimes he plays guitar until his fingers hurt.",
            "Joey has been known to draw characters while debugging code.",
            "He once combined photography + code to make a slideshow app.",
            "Joey’s favorite drum rhythm is in 7/8 time (odd but fun).",
            "Fun fact: This fact might not be true. 😉",
            "He has used Photoshop layers like a mad scientist.",
            "Joey has jammed to rock and jazz in the same session.",
            "He believes every project is better with background music.",
            "Sometimes Joey writes code with a guitar on his lap.",
            "Joey once doodled UI mockups on a napkin.",
            "Photography trips often inspire Joey’s creative coding ideas.",
            "Joey has tried turning a photo into pixel art with code.",
            "His favorite programming break activity: quick drum solo.",
            "Joey sometimes thinks in beats instead of keystrokes.",
            "He once edited a photo until it looked like a painting.",
            "Joey thinks debugging is like tuning an instrument.",
            "Fun fact: Joey has built apps just to manage his music playlists.",
            "Sometimes he draws digital portraits for friends.",
            "He once recorded guitar riffs and layered them in software.",
            "Joey’s favorite editing tool: undo (Ctrl+Z saves lives).",
            "This portfolio site might secretly be a jam session. 🎶",
            "Joey believes both photos and code should tell a story.",
            "Fun fact: this list has at least one fact that isn’t a fact."
        };

        private readonly Random _random = new();

        [HttpGet("random")]
        public IActionResult GetRandomFact()
        {
            var fact = FunFacts[_random.Next(FunFacts.Length)];
            return Ok(new { fact });
        }

        [HttpGet]
        public IActionResult GetAllFacts()
        {
            return Ok(FunFacts);
        }
    }
}
