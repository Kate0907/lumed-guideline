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
    public class SectionController : ApiController
    {
        private SectionService service = new SectionService();
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

        // POST api/<controller>
        //public Section Post()
        //{
        //    return service.Post();
        //}

        public HttpResponseMessage Post([FromBody]MainSection item)
        {
            if (ModelState.IsValid)
            {
                return service.Post(item);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // PUT api/<controller>/5
        public HttpResponseMessage Put(int id, [FromBody]Section item)
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

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            service.Delete(id);
        }
    }
}