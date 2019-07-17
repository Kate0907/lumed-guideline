using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Guideline.Models
{
    public class MainGroup
    {
        public int id { get; set; }
        public string name { get; set; }
        public List<MainSection> samemains
        {
            get
            {
                var newList = new List<MainSection>();
                foreach(var id in samemainsIds ?? new List<int>())
                {
                    foreach(var main in MainDb.MAINS)
                    {
                        if (main.id == id)
                        {
                            newList.Add(main);
                        }
                    }
                }
                return newList;
            }
        }
        public List<int> samemainsIds { get; set; } = new List<int>();
    }
}