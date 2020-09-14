using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChapeBahar.Controllers.Login
{
    [Route("api/[controller]")]
    public class Login : Controller
    {
        [HttpGet("/api/Login")]
        public IActionResult LoginActionResult()
        {
            return Json(new {type = "danger" , message = "نام کاربری یا کلمه عبور اشتباه است"});
        }
    }
}
