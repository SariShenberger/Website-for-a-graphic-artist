using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace APIServer.Models
{
  public class Service
  {
    public string title { get; set; }
    public string description { get; set; }
    public string image { get; set; }
    public int price { get; set; }
    public string priceFor { get; set; }
    public bool showDetails { get; set; }

  }
}
