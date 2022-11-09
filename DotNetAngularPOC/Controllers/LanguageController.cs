using DotNetAngularPOC.Models;
using DotNetAngularPOC.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DotNetAngularPOC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LanguageController : ControllerBase
    {
        private readonly ITechService _techService;

        private readonly ILogger<LanguageController> _logger;
        public LanguageController(ILogger<LanguageController> logger, ITechService techService)
        {
            _techService = techService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_techService.GetLanguages());
        }

        [HttpGet("{name}")]
        public IActionResult Get(string name)
        {
            var language = _techService.GetLanguagesByName(name);
            return language != null ? Ok(language) : NotFound("Language not found!");
        }

        [HttpGet("GetLanguagesByLanguageType/{languageType}")]
        public IActionResult GetLanguagesByLanguageType(string languageType)
        {
            return Ok(_techService.GetLanguagesByLanguageType(languageType));
        }

        [HttpPost]
        public void Post([FromBody] LanguageModel languageModel)
        {
            if (languageModel == null || string.IsNullOrWhiteSpace(languageModel.Name) || string.IsNullOrWhiteSpace(languageModel.LanguageType))
            {
                throw new Exception("Data Invalid !");
            }
            _techService.AddLanguage(languageModel);
        }


        [HttpPost("UpdateLanguage")]
        public void UpdateLanguage([FromBody] LanguageModel languageModel)
        {
            if (languageModel == null || string.IsNullOrWhiteSpace(languageModel.Name) || string.IsNullOrWhiteSpace(languageModel.LanguageType))
            {
                throw new Exception("Data Invalid !");
            }
            _techService.UpdateLanguage(languageModel);
        }


        [HttpDelete("{name}")]
        public void Delete(string name)
        {
            _techService.RemoveLanguage(name);
        }
    }
}
