using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using angularcore2.Models;

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
        public DbSet<angularcore2.Models.userModels> userModels { get; set; }

        public DbSet<angularcore2.Models.userAddressModels> userAddressModels { get; set; }
    }
}
