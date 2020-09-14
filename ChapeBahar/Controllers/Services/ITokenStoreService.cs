using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChapeBahar.Controllers.Services
{
    public interface ITokenStoreService
    {
        Task AddUserTokenAsync(UserToken userToken);
        Task AddUserTokenAsync(
            User user, string refreshToken, string accessToken,
            DateTimeOffset refreshTokenExpiresDateTime, DateTimeOffset accessTokenExpiresDateTime);
        Task<bool> IsValidTokenAsync(string accessToken, int userId);
        Task DeleteExpiredTokensAsync();
        Task<UserToken> FindTokenAsync(string refreshToken);
        Task DeleteTokenAsync(string refreshToken);
        Task InvalidateUserTokensAsync(int userId);
        Task<(string accessToken, string refreshToken)> CreateJwtTokens(User user);
        void CheckArgumentIsNull(string v);
    }
}
