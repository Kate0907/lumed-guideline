import { Link } from './link';
import { MainSection } from './main';

export class Section {
    id: number;
    title: string;
    message: Array<string>;
    main: Array<MainSection>;
    mainId: Array<number>;
}
