using System;

namespace ContactManager.Models
{
    public abstract class ContactManagerEntity
    {
        public int Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }

    }
}