import { LINK } from './mock-link';
import { Section } from './section';

export const SECTIONS: Section[] = [
// tslint:disable-next-line: max-line-length
    { id: 0, title: 'Key Messages', message: [`Cefazolin is the recommended antibiotic for surgical prophylaxis and can be used safely in the majority of patients with penicillin allergy, including anaphylaxis¹`,
    // tslint:disable-next-line: max-line-length
        'Cefazolin has unique side chains unlike any currently marketed penicillins or cephalosporins, making cross-reactivity highly unlikely. Anaphylaxis to cefazolin is uncommon, occurring in 0.0006% of surgical patients² ³', 'Alternative pre-operative antibiotic regimens are associated with increased surgical site infections and adverse effects compared to cefazolin⁴ ⁵', 'Only patients with a history of anaphylactic reaction to cefazolin or a history of Stevens-Johnson Syndrome or other severe, delayed reaction to beta-lactams should use alternative agents'], link: null },

    { id: 1, title: 'Type of Reaction to Penicillin', message: null, link: [LINK[6], LINK[7], LINK[8], LINK[9], LINK[10], ]},
// tslint:disable-next-line: max-line-length
    { id: 2, title: 'Key Messages',  message: ['Clindamycin should not be used for empiric treatment due to increasing resistance', 'The listed oral antibiotics have excellent or very good bioavailability', 'MRSA coverage not required empirically except in critically ill patients with purulent head/neck infections including otitis externa', 'Pseudomonas coverage not required empirically except in otitis externa', 'Control the source of infection, and send appropriate specimens to the microbiology laboratory'], link: [LINK[11], LINK[12], LINK[13], LINK[14]] },
// tslint:disable-next-line: max-line-length
    { id: 3, title: 'Key Messages', message: ['Acute bacterial meningitis (ABM) is a medical emergency', 'Listeria monocytogenes can cause meningitis in the following populations: >50 years of age, pregnancy, immunocompromised', 'Empiric antibiotic therapy should be started once the diagnosis of acute bacterial meningitis is suspected. Duration of therapy will depend on etiology'] , link: null },
// tslint:disable-next-line: max-line-length
    { id: 4, title: 'Key Messages', message: ['test', 'test', 'test'] , link: null },
// tslint:disable-next-line: max-line-length
    { id: 5, title: 'Management', message: ['Do NOT administer beta-lactam', 'Administer alternative antibiotic(i.e. Vancomycin)'] , link: [LINK[15]] },
// tslint:disable-next-line: max-line-length
    { id: 6, title: 'Proceed With Administering', message: null , link: [LINK[16]] },
    { id: 7, title: 'Most likely organisms', message: null , link:[LINK[20], LINK[21], LINK[22]] },
    { id: 8, title: 'IV', message: null , link:[LINK[17], LINK[15]] },
    { id: 9, title: 'Severe Penicillin Allergy', message: null , link:[LINK[17], LINK[15]] },
    { id: 10, title: 'Oral Stepdown', message: null , link:[LINK[17], LINK[18], LINK[19]] },
];
