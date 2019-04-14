using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using angularcore2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace angularcore2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly angularcore2Context _context;

        public AuthController(angularcore2Context context)
        {
            _context = context;
        }

        // GET: api/Auth
        [HttpGet]
        public IEnumerable<LoginModels> GetLoginModels()
        {
            return _context.LoginModels;
        }

        // GET: api/Auth/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetLoginModels([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var loginModels = await _context.LoginModels.FindAsync(id);

            if (loginModels == null)
            {
                return NotFound();
            }

            return Ok(loginModels);
        }

        // PUT: api/Auth/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLoginModels([FromRoute] int id, [FromBody] LoginModels loginModels)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != loginModels.Id)
            {
                return BadRequest();
            }

            _context.Entry(loginModels).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoginModelsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Auth
        [HttpPost]
        public async Task<IActionResult> PostLoginModels(LoginModels loginModels)
        {
            /////////////
            if (loginModels == null)
            {
                return BadRequest("Invalid client request");
            }

            if (loginModels.Username == "asif" && loginModels.Password == "123")
            {

                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokeOptions = new JwtSecurityToken(
                    issuer: "http://localhost:5000",
                    audience: "http://localhost:5000",
                    claims: new Claim[] { new Claim ( "role", "Admin")},
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signinCredentials

                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
            }
            else
            {
                return Unauthorized();
            }
            ////////////
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.LoginModels.Add(loginModels);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLoginModels", new { id = loginModels.Id }, loginModels);
        }

        // DELETE: api/Auth/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLoginModels([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var loginModels = await _context.LoginModels.FindAsync(id);
            if (loginModels == null)
            {
                return NotFound();
            }

            _context.LoginModels.Remove(loginModels);
            await _context.SaveChangesAsync();

            return Ok(loginModels);
        }

        private bool LoginModelsExists(int id)
        {
            return _context.LoginModels.Any(e => e.Id == id);
        }
    }
}