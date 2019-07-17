import { MainSection } from './main';
import { Message } from './message';

export class Section {
    id: number;
    title: string;
    messages: Array<Message>;
    main: Array<MainSection>;
    mainId: Array<number>;
    messageId: Array<number>;
}
