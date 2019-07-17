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
    public class MainGroupService
    {
        // GET api/values
        public IEnumerable<MainGroup> GetAllMainGroup()
        {
            return MainGroupDb.MAINGROUP;

        }

        // GET api/values/5
        public MainGroup Get(int id)
        {
            var g = MainGroupDb.MAINGROUP.FirstOrDefault(v => v.id == id);
            if (g == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                return g;
            }
        }

        // POST api/<controller>
        public MainGroup Post()
        {
            var item = new MainGroup();
            item.id = MainGroupDb.LastId++;
            item.samemainsIds = new List<int> { };
            item.name = "New Group";
            MainGroupDb.MAINGROUP.Add(item);
            return item;
        }

        // PUT api/values/5
        public HttpResponseMessage Put(int id, MainGroup item)
        {
            var g = MainGroupDb.MAINGROUP.FirstOrDefault(v => v.id == id);
            if (g == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                g.name = item.name;
                g.samemainsIds = item.samemainsIds;
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
        }

        public HttpResponseMessage Post(int id, MainSection item)
        {
            var g = MainGroupDb.MAINGROUP.FirstOrDefault(v => v.id == id);
            if(g.samemainsIds == null)
            {
                g.samemainsIds = new List<int> { item.id };
            }
            else
            {
                g.samemainsIds.Add(item.id);
            }
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            var g = MainGroupDb.MAINGROUP.FirstOrDefault(v => v.id == id);
            if (g == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                MainGroupDb.MAINGROUP.Remove(g);
            }
        }
    }
}