import {KeyMessage} from './KeyMessage';

export const KEYMESSAGE: KeyMessage[] = [
    { id: 1, name: 'Penicillin Allergy',
// tslint:disable-next-line: max-line-length
    messages: [`Cefazolin is the recommended antibiotic for surgical prophylaxis and can be used safely in the majority of patients with penicillin allergy, including anaphylaxis¹`,
// tslint:disable-next-line: max-line-length
    'Cefazolin has unique side chains unlike any currently marketed penicillins or cephalosporins, making cross-reactivity highly unlikely. Anaphylaxis to cefazolin is uncommon, occurring in 0.0006% of surgical patients² ³', 'Alternative pre-operative antibiotic regimens are associated with increased surgical site infections and adverse effects compared to cefazolin⁴ ⁵', 'Only patients with a history of anaphylactic reaction to cefazolin or a history of Stevens-Johnson Syndrome or other severe, delayed reaction to beta-lactams should use alternative agents'] },
// tslint:disable-next-line: max-line-length
    { id: 2, name: 'ENT infections', messages: ['Clindamycin should not be used for empiric treatment due to increasing resistance', 'The listed oral antibiotics have excellent or very good bioavailability', 'MRSA coverage not required empirically except in critically ill patients with purulent head/neck infections including otitis externa', 'Pseudomonas coverage not required empirically except in otitis externa', 'Control the source of infection, and send appropriate specimens to the microbiology laboratory']},
// tslint:disable-next-line: max-line-length
    { id: 3, name: 'Acute Bacterial Meningitis', messages: ['Acute bacterial meningitis (ABM) is a medical emergency', 'Listeria monocytogenes can cause meningitis in the following populations: >50 years of age, pregnancy, immunocompromised', 'Empiric antibiotic therapy should be started once the diagnosis of acute bacterial meningitis is suspected. Duration of therapy will depend on etiology']},
// tslint:disable-next-line: max-line-length
    { id: 4, name: 'Clostridium Difficile Infection', messages: ['Clostridium difficile is the commonest cause of infectious diarrhea in hospitals.', 'Implement Contact Plus precautions for suspected or confirmed C.difficile infection (CDI).', 'For all patients with CDI, discontinue concurrent antibiotics, proton pump inhibitors (PPIs), anti-peristaltic and promotability agents unless these are required. The reason for continuing these medications should be documented.', 'Medical and surgical management of CDI is based on severity of illness.']},
// tslint:disable-next-line: max-line-length
    {id: 5, name: 'Infectious Diarrhea', messages: ['Antibiotics are only required in special circumstances.', 'Focus on rehydration and electrolyte replacement for bacterial infectious diarrhea.', 'Stool cultures are not routinely recommended for hospital-onset diarrhea. (1)', 'Order Contact Precautions for patients with suspected infectious diarrhea.']}]
// tslint:disable-next-line: max-line-length
