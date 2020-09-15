using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using WebApi.Services;
using WebApi.Entities;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("Authenticate")]
        public async Task<IActionResult> Authenticate([FromBody]User userParam)
        {
            var user = await _userService.Authenticate(userParam.Username, userParam.Password);
            return Ok(user == null
                ? new { type = "danger", message = "نام کاربری یا کلمه عبور اشتباه است", user = (User) null }
                : new { type = "success", message = "با موفقیت وارد شدید", user = user });
        }

        [AllowAnonymous]
        [HttpGet("test")]
        public void Test()
        {
            _userService.Test();
        }

    }
}
