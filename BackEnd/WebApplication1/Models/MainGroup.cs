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
       public List<Item> samemains
        {
            get
            {
                var newList = new List<Item>();
                foreach(var id in samemainsIds ?? new List<int>())
                {
                    foreach(var item in ItemDb.ITEMS)
                    {
                        if (item.id == id)
                        {
                            newList.Add(item);
                        }
                    }
                }
                return newList;
            }
        }
        public List<int> samemainsIds { get; set; } = new List<int>();
    }
}
