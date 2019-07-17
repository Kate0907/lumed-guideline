using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Guideline.Models
{
    public static class MainGroupDb
    {
        public static List<MainGroup> MAINGROUP { get; set; } = new List<MainGroup>
            {
                new MainGroup{ id= 1, name = "Stories for 0-2 years", samemainsIds= new List<int> {0,8} },
                new MainGroup{ id= 2, name= "Stories for 3-6 years", samemainsIds=new List<int>{1,12}},
                new MainGroup{ id= 3, name= "Stories for 7-10 years", samemainsIds=new List<int>{2,7,9}},
                new MainGroup{ id= 4, name= "Stories for 11-16 years", samemainsIds=new List<int>{3,4,5}},
                new MainGroup{ id= 5, name= "test", samemainsIds = null}
            };

        public static int LastId = 6;
    }
}
