using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using Newtonsoft.Json;

namespace Guideline.Models
{
  public class ItemDb
  {
    public static void Serialize()
    {
      string jsonResult = JsonConvert.SerializeObject(ITEMS, Formatting.Indented);
      File.WriteAllText(@ConfigurationManager.AppSettings["SavePath"], jsonResult);
    }

    public static void Deserialize()
    {
        ITEMS = JsonConvert.DeserializeObject<List<Item>>(File.ReadAllText(@ConfigurationManager.AppSettings["GuidelinePath"]));
    }
    public static List<Item> ITEMS; 
    public static int LastId = 101;
  }
}


