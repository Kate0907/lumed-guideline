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
        
        public IEnumerable<MainGroup> GetAllMainGroup()
        {
            return MainGroupDb.MAINGROUP;
        }
        
        public MainGroup Get(int id)
        {
            var group = MainGroupDb.MAINGROUP.FirstOrDefault(item => item.id == id);
            if (group == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                return group;
            }
        }
       
        public MainGroup Post()
        {
            var newGroup = new MainGroup();
            newGroup.id = MainGroupDb.LastId++;
            newGroup.samemainsIds = new List<int> { };
            newGroup.name = "New Group";
            MainGroupDb.MAINGROUP.Add(newGroup);
            return newGroup;
        }
        
        public HttpResponseMessage Put(int id, MainGroup item)
        {
            var groupToUpdate = MainGroupDb.MAINGROUP.FirstOrDefault(group => group.id == id);
            if (groupToUpdate == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                groupToUpdate.name = item.name;
                groupToUpdate.samemainsIds = item.samemainsIds;
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
        }

        public HttpResponseMessage Post(int id, Item item)
        {
            var group = MainGroupDb.MAINGROUP.FirstOrDefault(mainGroup => mainGroup.id == id);
            if(group.samemainsIds == null)
            {
                  group.samemainsIds = new List<int> { item.id };
            }
            else
            {
                  group.samemainsIds.Add(item.id);
            }
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        public void Delete(int id)
        {
            var groupToDelete = MainGroupDb.MAINGROUP.FirstOrDefault(item => item.id == id);
            if (groupToDelete == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                MainGroupDb.MAINGROUP.Remove(groupToDelete);
            }
        }
    }
}
