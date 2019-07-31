using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;

namespace Guideline.Models
{
  public class ItemDb
  {
    public static void Serialize()
    {
      string jsonResult = JsonConvert.SerializeObject(ITEMS, Formatting.Indented);
      File.WriteAllText(@"c:\Source\lumed-guidelines\editedGuideline.json", jsonResult);
    }

    public static void Deserialize()
    {
        ITEMS = JsonConvert.DeserializeObject<List<Item>>(File.ReadAllText(@"c:\Source\lumed-guidelines\guideline.json"));
    }
    public static List<Item> ITEMS; 
    public static int LastId = 101;
  }
}


