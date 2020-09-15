using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChapeBahar.Controllers
{
    [Authorize]
    [Route("[controller]")]
    public class RegisterController : Controller
    {
        [HttpGet("/users/register")]
        public IActionResult RegisterUser()
        {
            return Json("Registered");
        }
    }
}
