namespace ContactManager.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Email : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Contacts", "Email", c => c.String(maxLength: 200));
            AddColumn("dbo.Contacts", "AlternateEmail", c => c.String(maxLength: 200));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Contacts", "AlternateEmail");
            DropColumn("dbo.Contacts", "Email");
        }
    }
}
