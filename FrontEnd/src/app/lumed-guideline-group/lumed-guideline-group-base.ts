import { Input, OnInit } from '@angular/core';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';
import { SessionCheckService } from '../session-check.service';

export class GuidelineGroupBase implements OnInit {
    @Input() public items: Item[];
    @Input() public itemGroup: Item[];

    public get isAdmin(): boolean {
        return this.sessionService.checkSession();
    }
    public readonly itemType = ItemType;

    constructor(
        protected itemService: GuidelineItemService,
        protected sessionService: SessionCheckService,
    ) { }

    public ngOnInit(): void {
        this.refresh();
    }

    public async refresh(): Promise<void> {
        this.items = await this.itemService.getAllItems();
        if (this.items != null) {
            this.itemGroup = this.items.filter(main => main.type === this.itemType.Group);
        }
    }
    public getItemById(id: number): Item {
        return this.items.find(main => main.id === id);
    }
}
