import {KeyMessage} from './KeyMessage';

export const MESSAGES: KeyMessage[] = [
    { id: 1, name: 'Management', messages: ['Do NOT administer beta-lactam', 'Administer alternative antibiotic(i.e.Vancomycin)' ]},
// tslint:disable-next-line: max-line-length
    { id: 2, name: 'Proceed With Administering', messages: null},
// tslint:disable-next-line: max-line-length
    { id: 3, name: 'Acute Bacterial Meningitis', messages: ['Acute bacterial meningitis (ABM) is a medical emergency', 'Listeria monocytogenes can cause meningitis in the following populations: >50 years of age, pregnancy, immunocompromised', 'Empiric antibiotic therapy should be started once the diagnosis of acute bacterial meningitis is suspected. Duration of therapy will depend on etiology']},
// tslint:disable-next-line: max-line-length
    { id: 4, name: 'Clostridium Difficile Infection', messages: ['Clostridium difficile is the commonest cause of infectious diarrhea in hospitals.', 'Implement Contact Plus precautions for suspected or confirmed C.difficile infection (CDI).', 'For all patients with CDI, discontinue concurrent antibiotics, proton pump inhibitors (PPIs), anti-peristaltic and promotability agents unless these are required. The reason for continuing these medications should be documented.', 'Medical and surgical management of CDI is based on severity of illness.']},
// tslint:disable-next-line: max-line-length
    {id: 5, name: 'Infectious Diarrhea', messages: ['Antibiotics are only required in special circumstances.', 'Focus on rehydration and electrolyte replacement for bacterial infectious diarrhea.', 'Stool cultures are not routinely recommended for hospital-onset diarrhea. (1)', 'Order Contact Precautions for patients with suspected infectious diarrhea.']}];
// tslint:disable-next-line: max-line-length