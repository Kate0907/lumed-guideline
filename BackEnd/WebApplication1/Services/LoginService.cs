using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using Guideline.Models;

namespace Guideline.Services
{
  public class LoginService
  {
    public bool login(User user)
    {
      if (user.name == ConfigurationManager.AppSettings["name"] && user.pwd == ConfigurationManager.AppSettings["password"])
        return true;
      else
        return false;
    }
  }
}
