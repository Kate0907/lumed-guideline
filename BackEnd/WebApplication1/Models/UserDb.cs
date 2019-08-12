using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Guideline.Models
{
  public class UserDb
  {
    public static List<User> USERS { get; set; } = new List<User>
        {
            new User { name = "abc@abc.com", pwd = "000000"},
         };
  }
}
