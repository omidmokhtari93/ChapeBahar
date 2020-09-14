using Microsoft.Extensions.Configuration;

namespace WebApi.Helpers
{
    public class ConnectionStringProvider : IConnectionStringProvider
    {
        private readonly IConfiguration _configs;

        public ConnectionStringProvider(IConfiguration configs)
        {
            _configs = configs;
        }

        public string GetConnectionString()
        {
            return _configs.GetConnectionString("ChapeBahar");
        }
    }
}