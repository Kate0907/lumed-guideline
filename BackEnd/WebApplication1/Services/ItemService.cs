using System;
using System.Collections.Generic;
using System.Linq;
using Guideline.Models;

namespace Guideline.Services
{
  public class ItemService
  {
    public IEnumerable<Item> GetAllItems()
    {
      return ItemDb.DeItems;
    }

    public Item Get(int id)
    {
      var item = ItemDb.DeItems.FirstOrDefault(Item => Item.id == id);
      if (item == null)
      {
        throw (new NullReferenceException());
      }
      else
      {
        return item;
      }
    }

    public Item createNewItem(ItemType type)
    {
      var itemToAdd = new Item();
      itemToAdd.id = ItemDb.LastId++;
      itemToAdd.type = type;
      itemToAdd.childrenIds = new List<int> { };
      itemToAdd.name = "New Group";
      ItemDb.DeItems.Add(itemToAdd);
      //ItemDb.Dump();

      return itemToAdd;
    }

    public Item createNewItemAndAddTo(int id, ItemType type)
    {
      var itemToAdd = new Item();
      itemToAdd.id = ItemDb.LastId++;
      itemToAdd.type = type;
      itemToAdd.childrenIds = new List<int> { };
      itemToAdd.name = "New Item";
      ItemDb.DeItems.Add(itemToAdd);

      var parentItem = ItemDb.ITEMS.FirstOrDefault(item => item.id == id);
      if (parentItem.childrenIds == null)
      {
        parentItem.childrenIds = new List<int> { itemToAdd.id };
      }
      else
      {
        parentItem.childrenIds.Add(itemToAdd.id);
      }
      //ItemDb.Dump();
      return itemToAdd;
    }

    public Item Update(Item itemToUpdate)
    {
      var oldItem = ItemDb.DeItems.FirstOrDefault(item => item.id == itemToUpdate.id);
      if (oldItem == null)
      {
        throw (new NullReferenceException());
      }
      else
      {
        oldItem.name = itemToUpdate.name;
        oldItem.childrenIds = itemToUpdate.childrenIds;
        //ItemDb.Dump();
        return oldItem;
      }
    }

    public void Delete(int id)
    {
      var itemToDelete = ItemDb.DeItems.FirstOrDefault(item => item.id == id);
      if (itemToDelete == null)
      {
        throw (new NullReferenceException());
      }
      else
      {
        ItemDb.DeItems.ForEach(item =>
        {
          if (item.childrenIds == null)
          {
            item.childrenIds = new List<int> { };
          }
          item.childrenIds = item.childrenIds.Where(childId => childId != id).ToList();
        });
        ItemDb.DeItems.Remove(itemToDelete);
        //ItemDb.Dump();
      }
    }
  }
}
