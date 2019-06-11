import { Link } from './Link';
import { TITLE } from './mock-title';
import { Title } from './title';

export const MICRO: Title[] = [
    { type: 1, treatmentId: 1, name: 'Vancomycin IV', info : null},
    { type: 1, treatmentId: 2, name: 'Cefazolin', info: null},
    { type: 1, treatmentId: 3, name: 'Piperacillin-Tazobactam', info: null},
    { type: 1, treatmentId: 4, name: 'Ciprofloxacin', info: null},
    { type: 1, treatmentId: 5, name: 'Doxycycline', info: null},
    { type: 1, treatmentId: 6, name: 'Trimethoprim-sulfamethoxazole', info : null},
// tslint:disable-next-line: max-line-length
    { type: 1, treatmentId: 1, name: 'Vancomycin IV', info: 'Vancomycin 25mg/kg IV loading dose x 1 dose followed by 15mg/kg IV with interval to be determined by vancomycin nomogram'},
    { type: 1, treatmentId: 4, name: 'Ciprofloxacin', info: 'Ciproloxacin 400mg IV q8h'},
    { type: 1, treatmentId: 4, name: 'Ciprofloxacin', info: 'Ciprofloxacin 750mg PO BID'},
    { type: 1, treatmentId: 5, name: 'Doxycycline', info: 'Doxycycline 100mg PO BID'},
    { type: 1, treatmentId: 6, name: 'Trimethoprim-sulfamethoxazole', info : 'Cotrimoxazole DS 2 tablets PO BID'},
];
