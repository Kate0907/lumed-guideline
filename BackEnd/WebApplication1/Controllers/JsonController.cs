using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using Guideline.Models;
using Guideline.Services;

namespace Guideline.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  public class JsonController : ApiController
  {
    private ItemService service = new ItemService();

    public void GetToJson()
    {
      service.SaveToJson();
    }

  }
}
