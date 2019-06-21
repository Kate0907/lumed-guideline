import { MainSection } from './main';
import { SECTIONS } from './mock-sections';

export const MAINS: MainSection[] = [
    { id: 0,  name: 'Penicillin Allergy(Peri-Operative)', section: [SECTIONS[0], SECTIONS[1]] },
    { id: 1,  name: 'ENT Infections', section: [SECTIONS[2]] },
    { id: 2,  name: 'Acute Bacterial Meningitis', section: [SECTIONS[2]] },
    { id: 3,  name: 'Clostridium Difficile Infections', section: [SECTIONS[3]]},
    { id: 4,  name: 'Infectious Diarrhea', section: [SECTIONS[0]] },
    { id: 5,  name: 'Intra-Abdominal Infections', section: [SECTIONS[0]]},
// Sub-illness:
    { id: 6, name: 'Stevens Johnson Syndrome', section: [SECTIONS[5]]},
    { id: 7,  name: 'Anaphylaxis to cefazolin', section: [SECTIONS[5]]},
    { id: 8,  name: 'Anaphylaxis to penicilin', section: [SECTIONS[6]]},
    { id: 9,  name: 'Non-Severe cephalosporin reaction', section: [SECTIONS[6]]},
    { id: 10,  name: 'Unknown reaction or patient unable to recall', section: [SECTIONS[6]]},
    { id: 11,  name: 'Severe/malignant otitis externa', section: [SECTIONS[7], SECTIONS[8], SECTIONS[9], SECTIONS[10], ]},
    { id: 500,  name: 'Vancomycin IV', section: [SECTIONS[6]]},
    { id: 501,  name: 'Cefazolin', section: [SECTIONS[5]]},
];
