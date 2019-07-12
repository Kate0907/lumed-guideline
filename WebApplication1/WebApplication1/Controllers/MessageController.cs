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
    public class MessageController : ApiController
    {
        private MessageService service = new MessageService();
        // GET api/<controller>
        public IEnumerable<Message> GetAllMessage()
        {
            return service.GetAllMessage();
        }

        // GET api/<controller>/5
        public Message Get(int id)
        {
            return service.Get(id);
        }

        public HttpResponseMessage Post(int id)
        {
            if (ModelState.IsValid)
            {
                return service.Post(id);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // PUT api/<controller>/5
        public HttpResponseMessage Put(int id, [FromBody]Message item)
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