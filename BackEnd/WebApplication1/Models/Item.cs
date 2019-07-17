using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Guideline.Models
{
  public class Item
  {
    public int id { get; set; }
    public string name { get; set; }
    public ItemType type { get; set; }
/*    public List<Item> children
    {
      get
      {
        var newList = new List<Item>();

        foreach (var id in childrenIds ?? new List<int>())
        {
          foreach (var item in ItemDb.ITEMS)
          {
            if (item.id == id)
            {
              newList.Add(item);
            }
          }
        }
        return newList;
      }
    }*/
    public List<int> childrenIds { get; set; } = new List<int>();
  }
}
