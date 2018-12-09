import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService, IDataItem } from "../core/data.service";

@Component({
    selector: "ItemDetail",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: IDataItem;

    constructor(
        private data: DataService,
        private route: ActivatedRoute
    ) { }

import * as dialogs from "tns-core-modules/ui/dialogs";


    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.data.getItem(id);
    }

    onTap() {
        let itemDetail = this;
        dialogs.action({
            message: "Choose image for the new item",
            cancelButtonText: "Cancel",
            actions: ["Photo", "Camera"]
        }).then(result => {
            console.log("Dialog result: " + result);
            if(result == "Photo"){
            } else if(result == "Camera") {
            }
        });
    }
}
