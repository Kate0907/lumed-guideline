import { Link } from './link';

export class Section {
    id: number;
    title: string;
    message: Array<string>;
    link: Array<Link>;
    linkId: Array<number>;
}
