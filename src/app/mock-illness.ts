import { Illness } from './illness';
import { KEYMESSAGE } from './mock-keyMessage';
import { LINK } from './mock-link';
import { SECTIONS } from './mock-sections';

export const ILLNESSES: Illness[] = [
    { id: 0, type: 0, name: 'Penicillin Allergy(Peri-Operative)', section: [SECTIONS[0], SECTIONS[1]] },
    { id: 1, type: 0, name: 'ENT Infections', section: [SECTIONS[2]] },
    { id: 2, type: 0, name: 'Acute Bacterial Meningitis', section: [SECTIONS[2]] },
    { id: 3, type: 0, name: 'Clostridium Difficile Infections', section: [SECTIONS[3]]},
    { id: 4, type: 0, name: 'Infectious Diarrhea', section: [SECTIONS[0]] },
    { id: 5, type: 0, name: 'Intra-Abdominal Infections', section: [SECTIONS[0]]},
// Sub-illness:
    { id: 6, type: 0, name: 'Stevens Johnson Syndrome', section: [SECTIONS[5]]},
    { id: 7, type: 0, name: 'Anaphylaxis to cefazolin', section: [SECTIONS[5]]},
    { id: 8, type: 0, name: 'Anaphylaxis to penicilin', section: [SECTIONS[6]]},
    { id: 9, type: 0, name: 'Non-Severe cephalosporin reaction', section: [SECTIONS[6]]},
    { id: 10, type: 0, name: 'Unknown reaction or patient unable to recall', section: [SECTIONS[6]]},

    { id: 11, type: 0, name: 'Severe/malignant otitis externa', section: [SECTIONS[7], SECTIONS[8], SECTIONS[9], SECTIONS[10], ]},
];
