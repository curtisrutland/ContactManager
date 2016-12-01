using Newtonsoft.Json;

namespace ContactManager.Models
{
    public class Note : ContactManagerEntity
    {
        public string Text { get; set; }
        public int ContactId { get; set; }

        [JsonIgnore]
        public virtual Contact Contact { get; set; }
    }
}