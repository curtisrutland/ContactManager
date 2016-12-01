using System.Data.Entity.ModelConfiguration;

namespace ContactManager.Models.Maps
{
    public class ContactMap : EntityTypeConfiguration<Contact>
    {
        public ContactMap()
        {
            Property(p => p.FirstName).HasMaxLength(50).IsRequired();
            Property(p => p.LastName).HasMaxLength(50).IsRequired();
            Property(p => p.AddressLine1).HasMaxLength(250).IsRequired();
            Property(p => p.AddressLine2).HasMaxLength(250);
            Property(p => p.PoBox).HasMaxLength(25);
            Property(p => p.City).HasMaxLength(100).IsRequired();
            Property(p => p.State).HasMaxLength(2).IsRequired();
            Property(p => p.Zip).HasMaxLength(15).IsRequired();
            Property(p => p.PhoneNumber).HasMaxLength(15);
            Property(p => p.AlternatePhoneNumber).HasMaxLength(15);
            Property(p => p.FaxNumber).HasMaxLength(15);
            Property(p => p.Email).HasMaxLength(200);
            Property(p => p.AlternateEmail).HasMaxLength(200);
        }
    }
}