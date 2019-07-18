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
    public class GuidelineController : ApiController
    {
        private GuidelineService service = new GuidelineService();

        public IEnumerable<MainSection> GetAllMainSections()
        {
            return service.GetAllMainSections();
        }
        
        public MainSection Get(int id)
        {
            return service.Get(id);
        }

        public MainSection Post(MainSection item)
        {    
            return service.Post();
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

        public HttpResponseMessage Put(int id, [FromBody]MainSection item)
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

        public void Delete(int id)
        {
            service.Delete(id);
        }
    }
}
