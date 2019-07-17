import { MainSection } from './main';
import { Message } from './message';

export class Section {
    id: number;
    title: string;
    messages: Array<Message>;
    mains: Array<MainSection>;
    mainIds?: Array<number>;
    messageIds?: Array<number>;
}
