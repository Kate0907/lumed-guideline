import { Link } from './Link';
import { TITLE } from './mock-title';
import { MICRO } from './mock-microbio-link';
import { PATHOGEN } from './mock-pathogen-link';

export const LINK: Link[] = [
    { id: 0, name: 'Penicillin Allergy', title: null},
    { id: 1, name: 'ENT infections', title: null},
    { id: 2, name: 'Acute Bacterial Meningitis', title: null},
    { id: 3, name: 'Clostridium Difficile Infections', title: null},
    { id: 4, name: 'Infectious Diarrhea', title: null},
    { id: 5, name: 'Intra-Abdominal Infections', title: null},
// In Penicillin Allergy:
    { id: 6, name: 'Stevens Johnson Syndrome', title: null},
    { id: 7, name: 'Anaphylaxis to cefazolin', title: null},
    { id: 8, name: 'Anaphylaxis to penicilin', title: null},
    { id: 9, name: 'Non-Severe cephalosporin reaction', title: null},
    { id: 10, name: 'Unknown reaction or patient unable to recall', title: null},
// In ENT infections:
    { id: 11, name: 'Severe/malignant otitis externa', title: null},
    { id: 12, name: 'Suppurative parotitis', title: null},
    { id: 13, name: 'Acute bacterial sinusits', title: null},
    { id: 14, name: 'Odontogenic parapharyngeal', title: null},
// Antimicrobios:(15)
    { id: 500, name: 'Vancomycin IV', title: null},
    { id: 501, name: 'Cefazolin', title: null},
    { id: 502, name: 'Piperacillin-Tazobactam', title: null},
    { id: 503, name: 'Ciprofloxacin', title: null},
    { id: 504, name: 'Doxycycline', title: null},

// Pathogens:(19)
    { id: 800, name: 'Pseudomonas', title: null},
    { id: 801, name: 'S.aureus(MRSA)', title: null},
    { id: 802, name: 'S.aureus(MSSA)', title: null},

    
]
