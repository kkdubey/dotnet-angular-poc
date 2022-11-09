using DotNetAngularPOC.Models;

namespace DotNetAngularPOC.Services
{
    public interface ITechService
    {
        List<LanguageModel> GetLanguages();
        LanguageModel? GetLanguagesByName(string name);
        List<LanguageModel> GetLanguagesByLanguageType(string languageType);
        void AddLanguage(LanguageModel languageModel);
        void UpdateLanguage(LanguageModel languageModel);
        void RemoveLanguage(string name);
    }
}
