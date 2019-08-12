using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using Guideline.Models;

namespace Guideline.Services
{
  public class ItemService
  {
    public IEnumerable<Item> GetAllItems()
    {
      return ItemDb.ITEMS;
    }

    public Item Get(int id)
    {
      var item = ItemDb.ITEMS.FirstOrDefault(Item => Item.id == id);
      if (item == null)
      {
        throw new NullReferenceException($"Can't find the item of id {id}");
      }
      return item; 
    }

    public Item createNewItem(ItemType type)
    {
      var itemToAdd = new Item();
      itemToAdd.id = ItemDb.LastId++;
      itemToAdd.type = type;
      itemToAdd.childrenIds = new List<int> { };
      itemToAdd.name = $"New {type}";
      if(ItemDb.ITEMS == null)
      {
        ItemDb.ITEMS = new List<Item> { itemToAdd };
      }
      else
      {
        ItemDb.ITEMS.Add(itemToAdd);
      }
      return itemToAdd;
    }

    public Item createNewItemAndAddTo(int id, ItemType type)
    {
      var itemToAdd = createNewItem(type);
      var parentItem = ItemDb.ITEMS.FirstOrDefault(item => item.id == id);
      if(parentItem == null)
      {
        throw new NullReferenceException($"can't find the item of id {id}");
      }
      if (parentItem.childrenIds == null)
      {
        parentItem.childrenIds = new List<int> { itemToAdd.id };
      }
      else
      {
        parentItem.childrenIds.Add(itemToAdd.id);
      }
      return itemToAdd;
    }

    public Item Update(Item itemToUpdate)
    {
      var oldItem = ItemDb.ITEMS.FirstOrDefault(item => item.id == itemToUpdate.id);
      if (oldItem == null)
      {
        throw new NullReferenceException($"can't find the item of id {itemToUpdate.id}");
      }
      oldItem.name = itemToUpdate.name;
      oldItem.childrenIds = itemToUpdate.childrenIds;
      return oldItem;
    }

    public void SaveToJson()
    {
      ItemDb.Serialize();
    }

    public void Delete(int id)
    {
      var itemToDelete = ItemDb.ITEMS.FirstOrDefault(item => item.id == id);
      if (itemToDelete == null)
      {
        throw new NullReferenceException($"can't find the item of id {id}");
      }
      ItemDb.ITEMS.ForEach(item =>
      {
        if (item.childrenIds == null)
        {
          item.childrenIds = new List<int> { };
        }
        item.childrenIds = item.childrenIds.Where(childId => childId != id).ToList();
      });
      ItemDb.ITEMS.Remove(itemToDelete);
    }

    public User createNewUser(string name, string pwd)
    {
      var userToAdd = new User();
      userToAdd.name = name;
      userToAdd.pwd = pwd;
      UserDb.USERS.Add(userToAdd);
      return userToAdd;
    }
  }
}
