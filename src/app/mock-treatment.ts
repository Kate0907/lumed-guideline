import { Illness } from './illness';
import { KEYMESSAGE } from './mock-keyMessage';
import { LINK } from './mock-link';
import { Treatment } from './treatment';
import { MESSAGES } from './mock-treatment-message';
import { MICRO } from './mock-microbio-link';
import { TREATMENTLINK } from './mock-treatment-link';

export const TREATMENT: Treatment[] = [
    { id: 1, name: 'Penicillin Allergy: Stevens Johnson Syndrome', message: [MESSAGES[0]], link: [LINK[6]]},
    { id: 2, name: 'Penicillin Allergy: Anaphylaxis to penicilin', message: [MESSAGES[1]], link: [LINK[7]]},
// tslint:disable-next-line: max-line-length
    { id: 3, name: 'Severe/malignant otitis externa', message: null, link: [TREATMENTLINK[0], TREATMENTLINK[1], TREATMENTLINK[2], TREATMENTLINK[3]] },
    { id: 4, name: 'Suppurative parotitis', message: null, link: [TREATMENTLINK[0], TREATMENTLINK[1], TREATMENTLINK[2], TREATMENTLINK[3]] },
// tslint:disable-next-line: max-line-length
    { id: 5, name: 'Acute bacterial sinusits', message: null, link: [TREATMENTLINK[0], TREATMENTLINK[1], TREATMENTLINK[2], TREATMENTLINK[3]] },
// tslint:disable-next-line: max-line-length
    { id: 6, name: 'Odontogenic parapharyngeal', message: null, link: [TREATMENTLINK[0], TREATMENTLINK[1], TREATMENTLINK[2], TREATMENTLINK[3]] },
];
