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

        public IEnumerable<MainSection> GetAllMainSections()
        {
            return MainDb.MAINS;
        }

        public MainSection Get(int id)
        {
            var mainSection = MainDb.MAINS.FirstOrDefault(main => main.id == id);
            if(mainSection == null)
            {
                throw(new NullReferenceException());
            }
            else
            {
                return mainSection;
            }          
        }

        public MainSection Post()
        {
            var newMain = new MainSection();
            newMain.id = MainDb.LastId++;
            newMain.sectionIds = new List<int> { };
            newMain.name = "New Main Section";
            MainDb.MAINS.Add(newMain);
            return newMain;
        }
        
        public HttpResponseMessage Post(int id)
        {
            var item = new MainSection();
            item.id = MainDb.LastId++;
            item.sectionIds = new List<int> { };
            item.name = "New Main Section";
            MainDb.MAINS.Add(item);

            var group = ItemDb.ITEMS.FirstOrDefault(v => v.id == id);
            if(group.childrenIds == null)
            {
               group.childrenIds = new List<int> { item.id };
            }
            else
            {
              group.childrenIds.Add(item.id);
            }
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        public HttpResponseMessage Put(int id, MainSection item)
        {
            var itemToUpdate = MainDb.MAINS.FirstOrDefault(main => main.id == id);
            if(itemToUpdate == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                itemToUpdate.name = item.name;
                itemToUpdate.sectionIds = item.sectionIds;
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
                   item.childrenIds = item.childrenIds.Where(childrenIds => childrenIds != id).ToList();
                 });
               ItemDb.ITEMS.Remove(itemToDelete);
             }            
         }
     }
}
