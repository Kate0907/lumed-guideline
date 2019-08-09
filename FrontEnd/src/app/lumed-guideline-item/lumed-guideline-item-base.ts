import { OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';

export class GuidelineItemBase implements OnInit {
    @Input() public item: Item;
    @Input() public items: Item[];
    public url: string[];
    public ID: number;
    public readonly itemType = ItemType;
    public show = true;

    public get isAdmin(): boolean {
        if (sessionStorage.getItem('loggedIn') === 'true') {
            return true;
        }
        return false;
    }

    constructor(
        protected route: ActivatedRoute,
        protected router: Router,
        protected itemService: GuidelineItemService,
        protected location: Location) {

        this.router.events.subscribe(navigation => {
            if (navigation instanceof NavigationEnd && navigation.url.indexOf('detail') !== -1) {
                this.refresh();
                const urls = navigation.url.split('/');
                const id = Number(urls[urls.length - 1]);
                this.url = urls;
                this.ID = id;
            }
        });
    }

    public ngOnInit(): void {
        this.refresh();
    }

    public async refresh(): Promise<void> {
        this.items = await this.itemService.getAllItems();
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.item = await this.itemService.getOneItem(id);
    }

    public async getItem(): Promise<void> {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.item = await this.itemService.getOneItem(id);
    }

    public async getItems(): Promise<void> {
        this.items = await this.itemService.getAllItems();
    }

    public getItemById(id: number): Item {
        return this.items.find(main => main.id === id);
    }

    public goBack(): void {
        this.location.back();
    }



}
