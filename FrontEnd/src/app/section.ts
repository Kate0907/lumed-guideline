import { MainSection } from './main';

export class Section {
    id: number;
    title: string;
    mains: Array<MainSection>;
    mainIds?: Array<number>;
}
