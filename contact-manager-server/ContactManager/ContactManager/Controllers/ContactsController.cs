using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using ContactManager.Models;
using ContactManager.Models.Contexts;

namespace ContactManager.Controllers
{
    [RoutePrefix("api/contacts")]
    public class ContactsController : ApiController
    {
        private const int PageSize = 3;

        private readonly ContactManagerContext _db = new ContactManagerContext();

        [HttpGet]
        [Route("count")]
        public async Task<int> CountContacts() => await _db.Contacts.CountAsync();

        [HttpGet]
        [Route("countpages")]
        public async Task<int> CountContactPages()
        {
            var total = await _db.Contacts.CountAsync();
            var pages = total % PageSize == 0
                ? total / PageSize
                : (total / PageSize) + 1;
            return pages;
        }

        // GET: api/Contacts
        [Route("filter/{offset:int?}")]
        public IQueryable<Contact> GetContacts(int offset = 0)
        {
            return _db.Contacts.OrderByDescending(c => c.CreatedOn).Skip(offset * PageSize).Take(PageSize);
        }

        // GET: api/Contacts/5
        [ResponseType(typeof(Contact))]
        public async Task<IHttpActionResult> GetContact(int id)
        {
            var contact = await _db.Contacts.FindAsync(id);
            if (contact == null)
            {
                return NotFound();
            }

            return Ok(contact);
        }

        // PUT: api/Contacts/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutContact(int id, Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contact.Id)
            {
                return BadRequest();
            }

            _db.Entry(contact).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Contacts
        [ResponseType(typeof(Contact))]
        public async Task<IHttpActionResult> PostContact(Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Contacts.Add(contact);
            await _db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = contact.Id }, contact);
        }

        // DELETE: api/Contacts/5
        [ResponseType(typeof(Contact))]
        public async Task<IHttpActionResult> DeleteContact(int id)
        {
            var contact = await _db.Contacts.FindAsync(id);
            if (contact == null)
            {
                return NotFound();
            }

            _db.Contacts.Remove(contact);
            await _db.SaveChangesAsync();

            return Ok(contact);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContactExists(int id)
        {
            return _db.Contacts.Count(e => e.Id == id) > 0;
        }
    }
}