using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using angularcore2.Models;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace angularcore2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class userModelsController : ControllerBase
    {
        private readonly angularcore2Context _context;

        public userModelsController(angularcore2Context context)
        {
            _context = context;
        }

        // GET: api/userModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<userModels>>> GetuserModels()
        {
            return await _context.userModels.ToListAsync();
        }

        // GET: api/userModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<userModels>> GetuserModels(int id)
        {
            var userModels = await _context.userModels.Include(x=> x.userAddress).FirstOrDefaultAsync(x=> x.Id == id);

            if (userModels == null)
            {
                return NotFound();
            }

            return userModels;
        }

        // PUT: api/userModels/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutuserModels(int id, userModels userModels)
        {
            //update by delete and insert
            System.Diagnostics.Debug.WriteLine("Inside Put--------------");
            System.Diagnostics.Debug.WriteLine(userModels.Id);
            var tmpuserModels = userModels;
            tmpuserModels.Id = id;
            _context.userModels.Remove(tmpuserModels);
            _context.SaveChanges();
            userModels.Id = 0;
            _context.userModels.Add(userModels);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!userModelsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            ///////////////////////////////////////////////////////////////////////

            return NoContent();
        }

        // POST: api/userModels
        [HttpPost]
        public async Task<ActionResult<userModels>> PostuserModels(userModels userModels)
        {

            _context.userModels.Add(userModels);

            //_context.userModels.

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetuserModels", new { id = userModels.Id }, userModels);
        }

        // DELETE: api/userModels/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<IEnumerable<userModels>>> DeleteuserModels(int id)
        {
            var userModels = await _context.userModels.FindAsync(id);
            if (userModels == null)
            {
                return NotFound();
            }

            _context.userModels.Remove(userModels);
            await _context.SaveChangesAsync();

            return await _context.userModels.ToListAsync();
        }

        private bool userModelsExists(int id)
        {
            return _context.userModels.Any(e => e.Id == id);
        }
    }
}
