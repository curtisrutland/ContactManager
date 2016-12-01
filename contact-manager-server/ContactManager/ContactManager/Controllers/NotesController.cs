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
    public class NotesController : ApiController
    {
        private readonly ContactManagerContext _db = new ContactManagerContext();

        // GET: api/Notes
        public IQueryable<Note> GetNotes()
        {
            return _db.Notes;
        }

        // GET: api/Notes/5
        [ResponseType(typeof(Note))]
        public async Task<IHttpActionResult> GetNote(int id)
        {
            var note = await _db.Notes.FindAsync(id);
            if (note == null)
            {
                return NotFound();
            }

            return Ok(note);
        }

        // PUT: api/Notes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNote(int id, Note note)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != note.Id)
            {
                return BadRequest();
            }

            _db.Entry(note).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NoteExists(id))
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

        // POST: api/Notes
        [ResponseType(typeof(Note))]
        public async Task<IHttpActionResult> PostNote(Note note)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Notes.Add(note);
            await _db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = note.Id }, note);
        }

        // DELETE: api/Notes/5
        [ResponseType(typeof(Note))]
        public async Task<IHttpActionResult> DeleteNote(int id)
        {
            var note = await _db.Notes.FindAsync(id);
            if (note == null)
            {
                return NotFound();
            }

            _db.Notes.Remove(note);
            await _db.SaveChangesAsync();

            return Ok(note);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NoteExists(int id)
        {
            return _db.Notes.Count(e => e.Id == id) > 0;
        }
    }
}