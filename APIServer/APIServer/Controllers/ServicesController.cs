using APIServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace APIServer.Controllers
{
  [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
  public class ServicesController : ApiController
    {

    // GET: api/Services
    [HttpGet]
    public IHttpActionResult Get()
        {
            return Ok(DB.myServices);
        }

   
    // GET: api/Services/5
    public string Get(int id)
        {
            return "value";
        }
        [HttpPost]
        // POST: api/Services
        public IHttpActionResult Post([FromBody]Service  service)
        {
          DB.myServices.Add(service);
          return Ok(DB.myServices);
        }

        // PUT: api/Services/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Services/5
        public void Delete(int id)
        {
        }
    }

  public interface IHttpActionResult<T>
  {
  }
}
