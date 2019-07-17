using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Guideline.Models
{
    public class MainSection
    {
        public int id { get; set; }
        public string name { get; set; }  
        public List<Section> sections
        {
            get
            {
                var newList = new List<Section>();
                
                foreach (var id in sectionIds ?? new List<int>())
                {
                    foreach (var section in SectionDb.SECTIONS)
                    {
                        if (section.id == id)
                        {
                            newList.Add(section);
                        }
                    }
                }
                return newList;
            }
        }
        public List<int> sectionIds { get; set; } = new List<int>();
    }
}
