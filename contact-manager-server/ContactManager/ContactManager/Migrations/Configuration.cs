using System.Collections.Generic;
using ContactManager.Models;

namespace ContactManager.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ContactManager.Models.Contexts.ContactManagerContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ContactManager.Models.Contexts.ContactManagerContext context)
        {
            context.Contacts.AddOrUpdate(
                c => new { c.FirstName, c.LastName },
                new Contact
                {
                    FirstName = "Curtis",
                    LastName = "Rutland",
                    AddressLine1 = "3625 Duval Rd",
                    AddressLine2 = "#114",
                    City = "Austin",
                    State = "TX",
                    Zip = "78759",
                    PhoneNumber = "210-232-7909",
                    Notes = new List<Note> { new Note { Text = "Test Note" } },
                    CreatedOn = DateTime.Now,
                    ModifiedOn = DateTime.Now
                }
            );
        }
    }
}
