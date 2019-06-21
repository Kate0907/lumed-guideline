import { MainGroup } from '../mainGroup';
import { MAINS } from '../mock-mainsection';


export const MAINGROUP: MainGroup[] = [
    {id: 1, name: 'Penicillin Allergy' , samemains: [ MAINS[0]]},
    {id: 2, name: 'Ear,Nose & Throat', samemains: [ MAINS[1]]},
    {id: 3, name: 'Central Nervous System', samemains: [ MAINS[2]]},
    {id: 4, name: 'Gastrointestinal', samemains: [ MAINS[3], MAINS[4], MAINS[5] ]}
];
