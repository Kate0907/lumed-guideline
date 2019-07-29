import { ItemType } from './ItemType';

export class Item {
    id: number;
    name: string;
    type: ItemType;
    childrenIds?: Array<number>;
    isChecked: boolean;
}
