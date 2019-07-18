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
  public class ItemController : ApiController
    {
    private ItemService service = new ItemService();

    public IEnumerable<Item> GetAllMainSections()
    {
      return service.GetAllItems();
    }

    public Item Get(int id)
    {
      return service.Get(id);
    }

    public HttpResponseMessage Post(int id, [FromBody]ItemType type)
    {
      if (ModelState.IsValid)
      {
        return service.Post(id,type);
      }
      else
      {
        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
      }
    }

    public Item Post([FromBody]ItemType type)
    {
        return service.Post(type);
    }

    public HttpResponseMessage Put( [FromBody]Item some)
    {
       if (ModelState.IsValid)
      {
        return service.Put(some);
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
