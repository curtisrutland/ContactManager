using System.Web.Http;

namespace ContactManager.Controllers
{
    [RoutePrefix("api/test")]
    public class TestController : ApiController
    {
        [HttpGet]
        [Route("echo/{message}")]
        public IHttpActionResult Echo(string message) => Ok(message);
    }
}