using Microsoft.AspNetCore.Mvc;
using System.Net;
using System;
using System.Collections.Generic;



    namespace portfolio_2.Controllers     
    {
        public class UserController : Controller   
        {

            [HttpGet]     
            [Route("")]    
            public IActionResult Index()
            {
                // ViewBag.Example = "Hello World!";
                return View("index");
            }

            [HttpGet]     
            [Route("projects")] 
            public IActionResult Projects()
            {
                return View("projects");
            }

            [HttpGet]      
            [Route("contact")]     
            public IActionResult Contact()
            {
                return View();
            }

        }
    }
