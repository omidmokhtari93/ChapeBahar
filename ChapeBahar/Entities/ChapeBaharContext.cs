using Microsoft.EntityFrameworkCore;
using WebApi.Helpers;

namespace WebApi.Entities
{
    public class ChapeBaharContext : DbContext
    {
        private readonly IConnectionStringProvider _connectionStringProvider;

        public ChapeBaharContext(IConnectionStringProvider connectionStringProvider)
        {
            _connectionStringProvider = connectionStringProvider;
        }

        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionStringProvider.GetConnectionString());
        }
    }
}