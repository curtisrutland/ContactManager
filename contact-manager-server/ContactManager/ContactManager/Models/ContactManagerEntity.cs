using System;

namespace ContactManager.Models
{
    public abstract class ContactManagerEntity
    {
        public int Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }

        public string CreatedOnText => CreatedOn.ToString("MM/dd/yy h:mm tt");
        public string ModifiedOnText => ModifiedOn.ToString("MM/dd/yy h:mm tt");
    }
}