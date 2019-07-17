import { Section } from './section';

export class MainSection {
    id: number;
    name: string;
    sections: Array<Section>;
    sectionIds?: Array<number>;
}
