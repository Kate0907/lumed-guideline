using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Guideline.Models;

namespace Guideline.Services
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ItemService
    {       
        public IEnumerable<Item> GetAllItems()
        {
            return ItemDb.ITEMS;
        }
       
        public Item Get(int id)
        {
            var item = ItemDb.ITEMS.FirstOrDefault(Item => Item.id == id);
            if(item == null)
            {
                throw(new NullReferenceException());
            }
            else
            {
                return item;
            }          
        }
        
        public Item Post(ItemType type)
        {
            var itemToAdd = new Item();
            itemToAdd.id = ItemDb.LastId++;
            itemToAdd.type = type;
            itemToAdd.childrenIds = new List<int> { };
            itemToAdd.name = "New Group";
            ItemDb.ITEMS.Add(itemToAdd);
            return itemToAdd;
        }
        
        public HttpResponseMessage Post(int id,ItemType type)
        {
            var itemToAdd = new Item();
            itemToAdd.id = ItemDb.LastId++;
            itemToAdd.type = type;
            itemToAdd.childrenIds = new List<int> { };
            itemToAdd.name = "New Item";
            ItemDb.ITEMS.Add(itemToAdd);
            
          var parentItem = ItemDb.ITEMS.FirstOrDefault(item => item.id == id);
        if (parentItem.childrenIds == null)
        {
          parentItem.childrenIds = new List<int> { itemToAdd.id };
        }
        else
        {
          parentItem.childrenIds.Add(itemToAdd.id);
        }           
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
       
        public HttpResponseMessage Put(Item newItem)
        {
            var oldItem = ItemDb.ITEMS.FirstOrDefault(item => item.id == newItem.id);
            if(oldItem == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                oldItem.name = newItem.name;
                oldItem.childrenIds = newItem.childrenIds;
                return new HttpResponseMessage(HttpStatusCode.OK);
            }           
        }

        public void Delete(int id)
        {
            var itemToDelete = ItemDb.ITEMS.FirstOrDefault(item => item.id == id);
            if(itemToDelete == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
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
        }
    }
}
