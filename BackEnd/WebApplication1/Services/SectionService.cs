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
    public class SectionService
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST create a new section and add to current main section
        public HttpResponseMessage Post(MainSection item)
        {
            var t = new Section();
            t.id = SectionDb.LastId++;
            t.mainIds = new List<int> { };
            t.title = "New Section";
            SectionDb.SECTIONS.Add(t);

            var m = MainDb.MAINS.FirstOrDefault(v => v.id == item.id);

            if (item.sectionIds == null)
            {
                m.sectionIds = new List<int> { t.id };
            }
            else
            {
                m.sectionIds.Add(t.id);    
            }
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        // PUT api/<controller>/5
        public HttpResponseMessage Put(int id, Section item)
        {
            var s = SectionDb.SECTIONS.FirstOrDefault(v => v.id == id);
            if(s == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                s.title = item.title;
                s.mainIds = item.mainIds;
                return new HttpResponseMessage(HttpStatusCode.OK);
            }                    
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            var s = SectionDb.SECTIONS.FirstOrDefault(v => v.id == id);
            if (s == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                MainDb.MAINS.ForEach(main =>
                {
                    if(main.sectionIds == null)
                    {
                        main.sectionIds = new List<int> {};
                    }
                    else
                    {
                        main.sectionIds = main.sectionIds.Where(sectionId => sectionId != id).ToList();
                    }
                    
                });
                SectionDb.SECTIONS.Remove(s);
            }
        }
    }
}
