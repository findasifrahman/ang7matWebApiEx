using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace angularcore2.Models
{
    public class angularcore2Context : DbContext
    {
        public angularcore2Context (DbContextOptions<angularcore2Context> options)
            : base(options)
        {
        }

        public DbSet<angularcore2.Models.Products> Products { get; set; }
        public DbSet<angularcore2.Models.LoginModels> LoginModels { get; set; }
    }
}
