using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace angularcore2.Models
{
    public class userModels
    {
        public int Id { get; set; }
        public string username { get; set; }
        public string userphone { get; set; }

        public IList<userAddressModels> userAddress { get; set; }

    }
    public class userAddressModels
    {
        public int userAddressModelsId { get; set; }
        public int userModelsId { get; set; }
     
        public string area { get; set; }
        public int areaCode { get; set; }
    }
}
