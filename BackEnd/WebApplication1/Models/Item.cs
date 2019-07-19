using System.Collections.Generic;

namespace Guideline.Models
{
  public class Item
  {
    public int id { get; set; }
    public string name { get; set; }
    public ItemType type { get; set; }
    public List<int> childrenIds { get; set; } = new List<int>();
  }
}
