using System.Collections.Generic;

namespace Guideline.Models
{
    public class Section
    {
        
        public int id { get; set; }
        public string title { get; set; }

        // TODO main -> mainSections
        public List<MainSection> mains{
            get
            {
                var newList = new List<MainSection>();
                foreach (var id in mainIds)
                {
                    foreach (var main in MainDb.MAINS)
                    {
                        if (main.id == id)
                        {
                            newList.Add(main);
                        }
                    }
                }
                return newList;
            }                
}
        // TODO mainId => linkIds
        public List<int> mainIds { get; set; } = new List<int>();
        public List<Message> messages
        {
            get
            {
                var newList = new List<Message>();
                foreach (var id in messageIds ?? new List<int>())
                {                      
                        foreach (var message in MessageDb.MESSAGES)
                        {
                            if (message.id == id)
                            {
                                newList.Add(message);
                            }
                        }
                }
                return newList;
            }
        }

        // TODO messageIds
        public List<int> messageIds { get; set; } = new List<int>();
    }
}
