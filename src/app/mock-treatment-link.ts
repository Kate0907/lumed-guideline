import { Link } from './Link';
import { TITLE } from './mock-title';
import { PATHOGEN } from './mock-pathogen-link';
import { MICRO } from './mock-microbio-link';

export const TREATMENTLINK: Link[] = [
    { id: 1, name: 'Most likely organisms', title: [PATHOGEN[0], PATHOGEN[1], PATHOGEN[2] ]},
    { id: 2, name: 'IV', title:  [MICRO[2], MICRO[6]]},
    { id: 3, name: 'Severe Penicillin Allergy', title:  [MICRO[7], MICRO[6]]},
    { id: 4, name: 'Oral Stepdown', title: [MICRO[8], MICRO[9], MICRO[10]]},
    { id: 5, name: 'Infectious Diarrhea', title:  [TITLE[0], TITLE[1], TITLE[2], TITLE[3], ]},
    { id: 6, name: 'Intra-Abdominal Infections', title:  [TITLE[0], TITLE[1], TITLE[2], TITLE[3], ]},
]