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
      var filepath = @ConfigurationManager.AppSettings["GuidelinePath"];
      if (File.Exists(filepath) == false)
      {
        throw new FileNotFoundException($"can't find the file");
      }
      var json = File.ReadAllText(filepath);
      var data = JsonConvert.DeserializeObject<List<Item>>(json);
      ITEMS = data;
      ItemDb.LastId = ITEMS[ITEMS.Count - 1].id + 1;
    }

    public static void SerializeToFile(string filename)
    {
      var filepath = $"c:\\Source\\lumed-guidelines\\{filename}.json";
      var json = JsonConvert.SerializeObject(ITEMS, Formatting.Indented);
      File.WriteAllText(filepath, json);
    }

    public static void DeserializeFromFile(string filename)
    {
      var filepath = $"c:\\Source\\lumed-guidelines\\{filename}.json";
      if (File.Exists(filepath) == false)
      {
        throw new FileNotFoundException($"can't find the file");
      }
      var json = File.ReadAllText(filepath);
      var data = JsonConvert.DeserializeObject<List<Item>>(json);
      ITEMS = data;
      var LastId = ITEMS[ITEMS.Count - 1].id + 1;
    }
  }
}


