import { IllnessGroup } from '../illnessGroup';
import { ILLNESSES } from '../mock-illness';


export const ILLGROUP: IllnessGroup[] = [
    {id: 1, name: 'Penicillin Allergy' , sameills: [ ILLNESSES[0]]},
    {id: 2, name: 'Ear,Nose & Throat', sameills: [ ILLNESSES[1]]},
    {id: 3, name: 'Central Nervous System', sameills: [ ILLNESSES[2]]},
    {id: 4, name: 'Gastrointestinal', sameills: [ ILLNESSES[3], ILLNESSES[4], ILLNESSES[5] ]}
];
