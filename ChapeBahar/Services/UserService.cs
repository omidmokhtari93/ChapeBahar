using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using WebApi.Entities;
using WebApi.Helpers;

namespace WebApi.Services
{
    public interface IUserService
    {
        Task<User> Authenticate(string username, string password);
    }

    public class UserService : IUserService
    {
        private readonly ChapeBaharContext _ctx;

        public UserService(ChapeBaharContext ctx)
        {
            _ctx = ctx;
        }
        public async Task<User> Authenticate(string username, string password)
        {
            var user = await _ctx.Users.FirstOrDefaultAsync(x => x.Username == username && x.Password == password);
            if (user == null)
                return null;
            user.Password = null;
            return user;
        }

    }
}
