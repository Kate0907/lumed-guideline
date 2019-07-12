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
                new MainGroup{ id= 1, name = "ppppPenicillin Allergy", samemainsIds= new List<int> {0} },
                new MainGroup{ id= 2, name= "eeeeEar,Nose & Throat", samemainsIds=new List<int>{1}},
                new MainGroup{ id= 3, name= "ccccCentral Nervous System", samemainsIds=new List<int>{2}},
                new MainGroup{ id= 4, name= "ggggGastrointestinal", samemainsIds=new List<int>{3, 4, 5, }},
                new MainGroup{ id= 5, name= "test", samemainsIds = null}
            };

        public static int LastId = 6;
    }
}