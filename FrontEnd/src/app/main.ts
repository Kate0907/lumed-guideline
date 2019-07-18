
import { Item } from './item';

export class MainSection {
    id: number;
    name: string;
    sections: Array<Item>;
    sectionIds?: Array<number>;
}
