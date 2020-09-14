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
        void Test();
    }

    public class UserService : IUserService
    {
        private readonly ChapeBaharContext _ctx;

        public UserService(ChapeBaharContext ctx)
        {
            _ctx = ctx;
        }

        // users hardcoded for simplicity, store in a db with hashed passwords in production applications
        public async Task<User> Authenticate(string username, string password)
        {

            var user = await _ctx.Users.FirstOrDefaultAsync(x => x.Username == username && x.Password == password);
            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so return user details without password
            user.Password = null;
            return user;
        }

        public void Test()
        {
            var user = _ctx.Users.ToList();
        }
    }
}