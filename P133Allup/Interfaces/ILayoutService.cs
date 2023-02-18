using P133Allup.Models;

namespace P133Allup.Interfaces
{
    public interface ILayoutService
    {
        Task<IDictionary<string, string>> GetSettings();

        Task<IEnumerable<Category>> GetCategories();
    }
}
