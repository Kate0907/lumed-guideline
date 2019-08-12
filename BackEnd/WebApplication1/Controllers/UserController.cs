using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using Guideline.Models;
using Guideline.Services;

namespace Guideline.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  public class UserController : ApiController
  {
    private LoginService service = new LoginService();
    public bool Post([FromBody]User user)
    {
      return service.login(user);
    }
  }
}
