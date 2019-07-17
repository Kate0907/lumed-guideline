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
    public class GuidelineService
    {
        // GET api/values
        public IEnumerable<MainSection> GetAllMainSections()
        {
            return MainDb.MAINS;
        }

        // GET api/values/5
        public MainSection Get(int id)
        {
            var m = MainDb.MAINS.FirstOrDefault(v => v.id == id);
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
        public MainSection Post()
        {
            var item = new MainSection();
            item.id = MainDb.LastId++;
            item.sectionIds = new List<int> { };
            item.name = "New Main Section";
            MainDb.MAINS.Add(item);
            return item;
        }
        // POST add a new main section to current section's mainIds
        public HttpResponseMessage Post(int id)
        {
            var item = new MainSection();
            item.id = MainDb.LastId++;
            item.sectionIds = new List<int> { };
            item.name = "New Main Section";
            MainDb.MAINS.Add(item);

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
        public HttpResponseMessage Put(int id, MainSection item)
        {
            var m = MainDb.MAINS.FirstOrDefault(v => v.id == id);
            if(m == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                m.name = item.name;
                m.sectionIds = item.sectionIds;
                return new HttpResponseMessage(HttpStatusCode.OK);
            }           
        }

         //DELETE api/values/5
         public void Delete(int id)
         {
             var m = ItemDb.ITEMS.FirstOrDefault(v => v.id == id);
             if(m == null)
             {
                 throw (new NullReferenceException());
             }
             else
             {
               ItemDb.ITEMS.ForEach(section =>
                 {
                     if (section.childrenIds == null)
                     {
                     section.childrenIds = new List<int> { };
                     }
                   section.childrenIds = section.childrenIds.Where(linkId => linkId != id).ToList();
                 });
        ItemDb.ITEMS.Remove(m);
             }
             
         }
     }
}
