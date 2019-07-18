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
        
        public Item Post()
        {
            var item = new Item();
            item.id = ItemDb.LastId++;
            item.childrenIds = new List<int> { };
            item.name = "New Main Section";
            ItemDb.ITEMS.Add(item);
            return item;
        }
        
        public HttpResponseMessage Post(int id,ItemType type)
        {
            var item = new Item();
            item.id = ItemDb.LastId++;
            item.type = type;
            item.childrenIds = new List<int> { };
            item.name = "New Item";
            ItemDb.ITEMS.Add(item);

            var parentItem = ItemDb.ITEMS.FirstOrDefault(Item => Item.id == id);
            if(parentItem.childrenIds == null)
            {
                   parentItem.childrenIds = new List<int> { item.id };
            }
            else
            {
                   parentItem.childrenIds.Add(item.id);
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
