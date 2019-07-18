using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Guideline.Models;
using Guideline.Services;

namespace Guideline.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class MainGroupController : ApiController
    {
        private MainGroupService service = new MainGroupService();
        // GET api/values
        public IEnumerable<MainGroup> GetAllMainGroup()
        {
            return service.GetAllMainGroup();
        }

        // GET api/values/5
        public MainGroup Get(int id)
        {
            return service.Get(id);
        }

        // POST api/<controller>
        public MainGroup Post()
        {
            return service.Post();
        }

        // PUT api/values/5
        public HttpResponseMessage Put(int id, [FromBody]MainGroup item)
        {
            if (ModelState.IsValid)
            {
                return service.Put(id, item);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        public HttpResponseMessage Post(int id, [FromBody]Item item)
        {
            if (ModelState.IsValid)
            {
                return service.Post(id, item);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            service.Delete(id);
        }
    }
}
