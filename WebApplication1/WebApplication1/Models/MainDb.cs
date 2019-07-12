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
            new MainSection { id = 0, name = "mimimimiPenicillin Allergy(Peri-Operative)", sectionIds=new List<int>{0,1}},
            new MainSection { id = 1, name = "ENT Infections",sectionIds=new List<int>{2}},
            new MainSection { id = 2, name = "Acute Bacterial Meningitis", sectionIds=new List<int>{2}},
            new MainSection { id = 3, name = "Clostridium Difficile Infections", sectionIds=new List<int>{3}},
            new MainSection { id = 4, name = "Infectious Diarrhea", sectionIds=new List<int>{0}},
            new MainSection { id = 5, name = "Intra-Abdominal Infections", sectionIds=new List<int>{0}},
            new MainSection { id = 6, name = "Stevens Johnson Syndrome",sectionIds=new List<int>{5}},
            new MainSection { id = 7, name = "Anaphylaxis to cefazolin", sectionIds=new List<int>{5}},
            new MainSection { id = 8, name = "Anaphylaxis to penicilin", sectionIds=new List<int>{6}},
            new MainSection { id = 9, name = "Non-Severe cephalosporin reaction", sectionIds=new List<int>{6}},
            new MainSection { id = 10, name = "Unknown reaction or patient unable to recall", sectionIds=new List<int>{6}},
            new MainSection { id = 11, name = "Severe/malignant otitis externa",sectionIds=new List<int>{7,8,9,10}},
            new MainSection { id = 12, name = "Suppurative parotitis",sectionIds=new List<int>{}},
            new MainSection { id = 13, name = "Acute bacterial sinusits",sectionIds=new List<int>{}},
            new MainSection { id = 14, name = "Test", sectionIds= null},
            new MainSection { id = 500, name = "Vancomycin IV", sectionIds=new List<int>{6}},
            new MainSection { id = 501, name = "Cefazolin", sectionIds=new List<int>{5}},
            new MainSection { id = 800, name = "Pseudomonas", sectionIds=new List<int>{}},
            new MainSection { id = 801, name = "S.aureus(MRSA)", sectionIds=new List<int>{}},
            new MainSection { id = 802, name = "S.aureus(MSSA)", sectionIds=new List<int>{}},
        };

        //public List<MainSection> SuchSections { get; set; } = new List<MainSection> { };

        public static int LastId = 803;

    }
}