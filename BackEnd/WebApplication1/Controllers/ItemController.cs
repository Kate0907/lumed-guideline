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


    // GET api/values
    public IEnumerable<Item> GetAllMainSections()
    {
      return service.GetAllItems();
    }

    // GET api/values/5
    public Item Get(int id)
    {
      return service.Get(id);
    }

    // POST api/<controller>
    public Item Post(MainSection item)
    {
      return service.Post();
    }

    public HttpResponseMessage Post(int id, ItemType type)
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

    // PUT api/values/5
    public HttpResponseMessage Put( [FromBody]Item some)
    {
      // if (ModelState.IsValid)
      //{
        return service.Put(some);
      //}
      //else
      //{
       // return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
      //}
    }

    // DELETE api/values/5
    public void Delete(int id)
    {
      service.Delete(id);
    }
  

}
}
