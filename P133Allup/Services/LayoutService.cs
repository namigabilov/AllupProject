using Microsoft.EntityFrameworkCore;
using P133Allup.DataAccessLayer;
using P133Allup.Interfaces;
using P133Allup.Models;

namespace P133Allup.Services
{
    public class LayoutService : ILayoutService
    {
        private readonly AppDbContext _appDbContext;

        public LayoutService(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<IEnumerable<Category>> GetCategories()
        {
            return await _appDbContext.Categories.Include(c=>c.Children).Where(c=>c.IsMain == true && c.IsDeleted == false )
                .ToListAsync();
        }

        public async Task<IDictionary<string, string>> GetSettings()
        {
            IDictionary<string ,string> settings = await _appDbContext.Settings.ToDictionaryAsync(s=>s.Key , s=>s.Value);

            return settings;
        }
    }
}
