using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace ChapeBahar
{
    internal interface ITokenValidatorService
    {
        Task ValidateAsync(TokenValidatedContext context);
    }
}