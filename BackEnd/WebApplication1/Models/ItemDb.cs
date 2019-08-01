using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using Newtonsoft.Json;

namespace Guideline.Models
{
  public class ItemDb
  {
    public static List<Item> ITEMS;
    public static int LastId;
    public static void Serialize()
    {
      string jsonResult = JsonConvert.SerializeObject(ITEMS, Formatting.Indented);
      File.WriteAllText(@ConfigurationManager.AppSettings["SavePath"], jsonResult);
    }
    public static void Deserialize()
    {
      ITEMS = JsonConvert.DeserializeObject<List<Item>>(File.ReadAllText(@ConfigurationManager.AppSettings["GuidelinePath"]));
      LastId = ITEMS[ITEMS.Count - 1].id + 1;
    }
    public static void SerializeToFile(string filename)
    {
      string jsonResult = JsonConvert.SerializeObject(ITEMS, Formatting.Indented);
      File.WriteAllText(@"c:\Source\lumed-guidelines\" + filename + ".json", jsonResult);
    }
    public static void DeserializeFromFile(string filename)
    {
      ITEMS = JsonConvert.DeserializeObject<List<Item>>(File.ReadAllText(@"c:\Source\lumed-guidelines\" + filename + ".json"));
      LastId = ITEMS[ITEMS.Count - 1].id + 1;
    }
  }
}


