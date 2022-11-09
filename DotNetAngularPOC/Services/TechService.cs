using DotNetAngularPOC.Models;
using System.Xml.Linq;

namespace DotNetAngularPOC.Services
{
    public class TechService: ITechService
    {
        private List<LanguageModel> languageModels;

        public TechService()
        {
            languageModels = new List<LanguageModel>();
        }

        public List<LanguageModel> GetLanguages()
        {
            return languageModels;
        }

        public List<LanguageModel> GetLanguagesByLanguageType(string languageType)
        {
            return languageModels.Where(x => x.LanguageType.Equals(languageType)).ToList();
        }

        public void AddLanguage(LanguageModel languageModel)
        {
            languageModels.Add(languageModel);
        }

        public void RemoveLanguage(string name)
        {
            LanguageModel? item = languageModels.FirstOrDefault(x => x.Name == name);
            if (item != null)
            {
                languageModels.Remove(item);
            }
        }

        public LanguageModel? GetLanguagesByName(string name)
        {
            LanguageModel? item = languageModels.FirstOrDefault(x => x.Name == name);
            return item != null ? item : null;
        }

        public void UpdateLanguage(LanguageModel languageModel)
        {
            LanguageModel? item = languageModels.FirstOrDefault(x => x.Name == languageModel.Name);
            if (item != null)
            {
                languageModels.Remove(item);
            }
            languageModels.Add(languageModel);
        }
    }
}
