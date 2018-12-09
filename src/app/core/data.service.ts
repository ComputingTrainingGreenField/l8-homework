import { Injectable } from "@angular/core";

export interface IDataItem {
    id: number;
    name: string;
    description: string;
    src: string;
}
@Injectable()
export class DataService {
    private items = new Array<IDataItem>(
    {
        id: 1,
        name: "Item 1",
        description: "Description for Item 1",
        src: "https://www.rp.edu.sg/images/default-source/library/floor-directory/library-map-2018.png"
    },
    {
        id: 2,
        name: "Item 2",
        description: "Description for Item 2",
        src: "https://library.appstate.edu/sites/library.appstate.edu/files/floor_map_ll_201703.png"
    },
    {
        id: 3,
        name: "Item 3",
        description: "Description for Item 3",
        src: "https://www.libraries.rutgers.edu/sites/default/files/maps/chang_library.png"
    },
