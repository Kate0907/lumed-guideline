using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Guideline.Models
{
    public static class MainDb
    {
        public static List<MainSection> MAINS { get; set; } = new List<MainSection>
        {
            new MainSection { id = 0, name = "Cinderella", sectionIds=new List<int>{0,1}},
            new MainSection { id = 1, name = "Beauty and the Beast",sectionIds=new List<int>{2}},
            new MainSection { id = 2, name = "Little Red Riding Hood", sectionIds=new List<int>{2}},
            new MainSection { id = 3, name = "Snow White and the Seven Dwarfs", sectionIds=new List<int>{3}},
            new MainSection { id = 4, name = "Sleeping Beauty", sectionIds=new List<int>{0}},
            new MainSection { id = 5, name = "Puss in Boots", sectionIds=new List<int>{0}},
            new MainSection { id = 6, name = "Rapunzel",sectionIds=new List<int>{5}},
            new MainSection { id = 7, name = "The Ugly Duckling ", sectionIds=new List<int>{5}},
            new MainSection { id = 8, name = "The Little Match Girl ", sectionIds=new List<int>{6}},
            new MainSection { id = 9, name = "The Princess and the Pea ", sectionIds=new List<int>{6}},
            new MainSection { id = 10, name = "The Emperor's New Clothes ", sectionIds=new List<int>{6}},
            new MainSection { id = 11, name = "The Little Mermaid ",sectionIds=new List<int>{7,8,9,10}},
            new MainSection { id = 12, name = "The Fox and The Hound ",sectionIds=new List<int>{}},
            new MainSection { id = 13, name = "Tom Thumb ",sectionIds=new List<int>{}},
            new MainSection { id = 14, name = "Test", sectionIds= null},
            new MainSection { id = 500, name = "Alice in Wonderland", sectionIds=new List<int>{6}},
            new MainSection { id = 501, name = "Hansel and Gretel ", sectionIds=new List<int>{5}},
            new MainSection { id = 800, name = "Rumpelstiltskin ", sectionIds=new List<int>{}},
            new MainSection { id = 801, name = "The Frog Prince ", sectionIds=new List<int>{}},
            new MainSection { id = 802, name = "The Butterfly", sectionIds=new List<int>{}},
        };

        //public List<MainSection> SuchSections { get; set; } = new List<MainSection> { };

        public static int LastId = 803;

    }
}
