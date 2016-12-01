using System;
using System.Data.Entity;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ContactManager.Models.Maps;

namespace ContactManager.Models.Contexts
{
    public class ContactManagerContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Note> Notes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new ContactMap());
        }

        public override int SaveChanges()
        {
            AddTimeStamps();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync()
        {
            AddTimeStamps();
            return base.SaveChangesAsync();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken)
        {
            AddTimeStamps();
            return base.SaveChangesAsync(cancellationToken);
        }

        private void AddTimeStamps()
        {
            var entities = ChangeTracker.Entries()
                .Where(x => x.Entity is ContactManagerEntity && (x.State == EntityState.Added || x.State == EntityState.Modified));
            foreach (var e in entities)
            {
                var ee = (ContactManagerEntity) e.Entity;
                if (e.State == EntityState.Added) ee.CreatedOn = DateTime.Now;
                ee.ModifiedOn = DateTime.Now;
            }
        }
    }
}