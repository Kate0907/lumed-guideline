using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using Newtonsoft.Json;

namespace Guideline.Models
{
  public class ItemDb
  {
    public static List<Item> ITEMS;
    public static int LastId;

    public static void Serialize()
    {
      var filepath = @ConfigurationManager.AppSettings["SavePath"];
      string json = JsonConvert.SerializeObject(ITEMS, Formatting.Indented);
      File.WriteAllText(filepath, json);
    }

    public static void Deserialize()
    {
      var filepath = @ConfigurationManager.AppSettings["ReadPath"];
      if (File.Exists(filepath) == false)
      {
        throw new FileNotFoundException($"can't find the file at {filepath}");
      }
      var json = File.ReadAllText(filepath);
      var data = JsonConvert.DeserializeObject<List<Item>>(json);
      ITEMS = data;
      if (ITEMS != null)
      {
        ItemDb.LastId = ITEMS[ITEMS.Count - 1].id + 1;
      }
      else { ItemDb.LastId = 0; }
    }

    public static void SerializeToFile(string filename)
    {
      var filepath = @ConfigurationManager.AppSettings["FilePath"] + filename +".json";
      var json = JsonConvert.SerializeObject(ITEMS, Formatting.Indented);
      File.WriteAllText(filepath, json);
    }

    public static void DeserializeFromFile(string filename)
    {
      var filepath = @ConfigurationManager.AppSettings["FilePath"] + filename + ".json";
      if (File.Exists(filepath) == false)
      {
        throw new FileNotFoundException($"can't find the file at {filepath}");
      }
      var json = File.ReadAllText(filepath);
      var data = JsonConvert.DeserializeObject<List<Item>>(json);
      ITEMS = data;
      if(ITEMS != null)
      {
        ItemDb.LastId = ITEMS[ITEMS.Count - 1].id + 1;
      }
      else { ItemDb.LastId = 0; }
    }
  }
}


