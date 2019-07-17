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
        // GET api/values
        public IEnumerable<Item> GetAllItems()
        {
            return ItemDb.ITEMS;
        }

        // GET api/values/5
        public Item Get(int id)
        {
            var m = ItemDb.ITEMS.FirstOrDefault(v => v.id == id);
            if(m == null)
            {
                throw(new NullReferenceException());
            }
            else
            {
                return m;
            }          
        }

        // POST api/<controller>
        public Item Post()
        {
            var item = new Item();
            item.id = ItemDb.LastId++;
            item.childrenIds = new List<int> { };
            item.name = "New Main Section";
            ItemDb.ITEMS.Add(item);
            return item;
        }
        // POST add a new main section to current section's mainIds
        public HttpResponseMessage Post(int id,ItemType type)
        {
            var item = new Item();
            item.id = ItemDb.LastId++;
            item.type = type;
            item.childrenIds = new List<int> { };
            item.name = "New Item";
            ItemDb.ITEMS.Add(item);

            var s = ItemDb.ITEMS.FirstOrDefault(v => v.id == id);
            if(s.childrenIds == null)
            {
                s.childrenIds = new List<int> { item.id };
            }
            else
            {
                s.childrenIds.Add(item.id);
            }
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        // PUT api/values/5
        public HttpResponseMessage Put(Item some)
        {
            var m = ItemDb.ITEMS.FirstOrDefault(v => v.id == some.id);
            if(m == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                m.name = some.name;
                //m.childrenIds = item.childrenIds;
                return new HttpResponseMessage(HttpStatusCode.OK);
            }           
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            var m = ItemDb.ITEMS.FirstOrDefault(v => v.id == id);
            if(m == null)
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
             ItemDb.ITEMS.Remove(m);
            }
            
        }
    }
}
