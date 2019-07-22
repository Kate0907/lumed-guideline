import {Input, OnInit } from '@angular/core';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';

export class GuidelineGroupBase implements OnInit {
    @Input() public items: Item[];
    @Input() public itemGroup: Item[];

    public readonly itemType = ItemType;
    constructor(
        protected itemService: GuidelineItemService,
    ) { }

     public ngOnInit(): void {
        this.refresh();
     }

    public async refresh(): Promise<void> {
        this.items = await this.itemService.getAllItems();
        this.itemGroup = this.items.filter(main => main.type === this.itemType.Group);
    }
    public getItemById(id: number): Item {
        return this.items.find(main => main.id === id);
    }
}
