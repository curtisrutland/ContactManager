using System.Web.Http;

namespace ContactManager.Controllers
{
    public class StatesController : ApiController
    {
        // GET api/<controller>
        public IHttpActionResult Get()
        {
            var results = new[]
            {
                new {State = "Alabama", Abbreviation = "AL"},
                new {State = "Alaska", Abbreviation = "AK"},
                new {State = "Arizona", Abbreviation = "AZ"},
                new {State = "Arkansas", Abbreviation = "AR"},
                new {State = "California", Abbreviation = "CA"},
                new {State = "Colorado", Abbreviation = "CO"},
                new {State = "Connecticut", Abbreviation = "CT"},
                new {State = "Delaware", Abbreviation = "DE"},
                new {State = "Florida", Abbreviation = "FL"},
                new {State = "Georgia", Abbreviation = "GA"},
                new {State = "Hawaii", Abbreviation = "HI"},
                new {State = "Idaho", Abbreviation = "ID"},
                new {State = "Illinois", Abbreviation = "IL"},
                new {State = "Indiana", Abbreviation = "IN"},
                new {State = "Iowa", Abbreviation = "IA"},
                new {State = "Kansas", Abbreviation = "KS"},
                new {State = "Kentucky", Abbreviation = "KY"},
                new {State = "Louisiana", Abbreviation = "LA"},
                new {State = "Maine", Abbreviation = "ME"},
                new {State = "Maryland", Abbreviation = "MD"},
                new {State = "Massachusetts", Abbreviation = "MA"},
                new {State = "Michigan", Abbreviation = "MI"},
                new {State = "Minnesota", Abbreviation = "MN"},
                new {State = "Mississippi", Abbreviation = "MS"},
                new {State = "Missouri", Abbreviation = "MO"},
                new {State = "Montana", Abbreviation = "MT"},
                new {State = "Nebraska", Abbreviation = "NE"},
                new {State = "Nevada", Abbreviation = "NV"},
                new {State = "New Hampshire", Abbreviation = "NH"},
                new {State = "New Jersey", Abbreviation = "NJ"},
                new {State = "New Mexico", Abbreviation = "NM"},
                new {State = "New York", Abbreviation = "NY"},
                new {State = "North Carolina", Abbreviation = "NC"},
                new {State = "North Dakota", Abbreviation = "ND"},
                new {State = "Ohio", Abbreviation = "OH"},
                new {State = "Oklahoma", Abbreviation = "OK"},
                new {State = "Oregon", Abbreviation = "OR"},
                new {State = "Pennsylvania", Abbreviation = "PA"},
                new {State = "Rhode Island", Abbreviation = "RI"},
                new {State = "South Carolina", Abbreviation = "SC"},
                new {State = "South Dakota", Abbreviation = "SD"},
                new {State = "Tennessee", Abbreviation = "TN"},
                new {State = "Texas", Abbreviation = "TX"},
                new {State = "Utah", Abbreviation = "UT"},
                new {State = "Vermont", Abbreviation = "VT"},
                new {State = "Virginia", Abbreviation = "VA"},
                new {State = "Washington", Abbreviation = "WA"},
                new {State = "West Virginia", Abbreviation = "WV"},
                new {State = "Wisconsin", Abbreviation = "WI"},
                new {State = "Wyoming", Abbreviation = "WY"}
            };
            return Ok(results);
        }

    }
}