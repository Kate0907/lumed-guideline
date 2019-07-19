using System.Collections.Generic;
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

    public Item Post(int id, [FromBody]ItemType type)
    {
      return service.createNewItemAndAddTo(id, type);
    }

    public Item Post([FromBody]ItemType type)
    {
      return service.createNewItem(type);
    }

    public Item Put([FromBody]Item itemToUpdate)
    {
      return service.Update(itemToUpdate);
    }

    public void Delete(int id)
    {
      service.Delete(id);
    }
  }
}
