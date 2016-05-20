/// <reference path="../typings/mapscreenr/MapScreenr.d.ts" />
/// <reference path="../typings/groupholdr/GroupHoldr.d.ts" />
/// <reference path="../typings/inputwritr/InputWritr.d.ts" />
/// <reference path="../typings/mapscreatr/MapsCreatr.d.ts" />
/// <reference path="../typings/areaspawnr/AreaSpawnr.d.ts" />
/// <reference path="../typings/objectmakr/ObjectMakr.d.ts" />
/// <reference path="../typings/pixeldrawr/PixelDrawr.d.ts" />
/// <reference path="../typings/itemsholdr/ItemsHoldr.d.ts" />
/// <reference path="../typings/timehandlr/TimeHandlr.d.ts" />

import { IAreaSpawnr } from "IAreaSpawnr";
import { IGroupHoldr } from "IGroupHoldr";
import { IItemsHoldr } from "IItemsHoldr";
import { IInputWritr } from "IInputWritr";
import { IAreaRaw as IMapsCreatrAreaRaw, IMacro, IMapsCreatr, IThing as IMapsCreatrIThing, IMapRaw as IMapsCreatrMapRaw } from "IMapsCreatr";
import { IMapScreenr } from "IMapScreenr";
import { IObjectMakr } from "IObjectMakr";
import { IPixelDrawr, IThing as IPixelDrawrIThing } from "IPixelDrawr";
import { IPreThing as IMapsCreatrIPreThing } from "IPreThing";
import { ITimeHandlr } from "ITimeHandlr";

export interface IGameStartr {
    settings: any;
    GroupHolder: IGroupHoldr;
    InputWriter: IInputWritr;
    MapsCreator: IMapsCreatr;
    MapScreener: IMapScreenr;
    AreaSpawner: IAreaSpawnr;
    ObjectMaker: IObjectMakr;
    PixelDrawer: IPixelDrawr;
    ItemsHolder: IItemsHoldr;
    TimeHandler: ITimeHandlr;
    player: IPlayer;
    container: HTMLDivElement;
    scale: number;
    unitsize: number;
    addPageStyles(styles: any): void;
    addThing(thing: IThing, x?: number, y?: number): IThing;
    createElement(tag: "a", ...args: any[]): HTMLLinkElement;
    createElement(tag: "div", ...args: any[]): HTMLDivElement;
    createElement(tag: "h1", ...args: any[]): HTMLHeadingElement;
    createElement(tag: "h2", ...args: any[]): HTMLHeadingElement;
    createElement(tag: "h3", ...args: any[]): HTMLHeadingElement;
    createElement(tag: "h4", ...args: any[]): HTMLHeadingElement;
    createElement(tag: "input", ...args: any[]): HTMLInputElement;
    createElement(tag: "select", ...args: any[]): HTMLSelectElement;
    createElement(tag: string, ...args: any[]): HTMLElement;
    killNormal(thing: IThing): void;
    proliferateElement(recipient: HTMLElement, donor: any, noOverride?: boolean): void;
    setLeft(thing: IThing, left: number): void;
    setMap(name: string, location?: string): void;
    setRight(thing: IThing, right: number): void;
    setTop(thing: IThing, top: number): void;
    shiftHoriz(thing: IThing, dx: number, notChanged?: boolean): void;
    proliferate(recipient: any, donor: any, noOverride?: boolean): any;
    scrollWindow(x: number): void;
}

export interface IThing extends IPixelDrawrIThing, IMapsCreatrIThing {
    width: number;
    height: number;
    left: number;
    outerok: boolean | number;
    groupType: string;
}

export interface IPlayer extends IThing {
    dead: boolean;
}

export interface IPreThing extends IMapsCreatrIPreThing {
    thing: IThing;
    xloc: number;
    yloc: number;
}

export interface IPreThingDescriptor {
    offsetTop?: number;
    offsetLeft?: number;
    width?: IPreThingDimensionDescriptor;
    height?: IPreThingDimensionDescriptor;
    options?: {
        [i: string]: IPreThingDimensionDescriptor;
    };
}

export interface IPreThingDimensionDescriptor {
    type?: string;
    value?: any;
    Infinite?: any;
    mod?: number;
    real?: number;
}

export interface IMapRaw extends IMapsCreatrMapRaw {
    time: number;
    areas: {
        [i: string]: IAreaRaw;
    };
}

export interface IAreaRaw extends IMapsCreatrAreaRaw {
    setting?: string;
}

export interface IDataMouseEvent extends MouseEvent {
    dataTransfer: DataTransfer;
}

export interface IDataProgressEvent extends ProgressEvent {
    currentTarget: IDataEventTarget;
}

export interface IDataEventTarget extends EventTarget {
    result: string;
}

export interface IThingIcon extends HTMLDivElement {
    options: any[];
}

export interface IDisplayContainer {
    "container": HTMLDivElement;
    "scrollers": {
        "container": HTMLDivElement;
        "left": HTMLDivElement;
        "right": HTMLDivElement;
    };
    "gui": HTMLDivElement;
    "head": HTMLDivElement;
    "namer": HTMLInputElement;
    "minimizer": HTMLDivElement;
    "stringer": {
        "textarea": HTMLTextAreaElement;
        "messenger": HTMLDivElement;
    };
    "inputDummy": HTMLInputElement;
    "sections": {
        "ClickToPlace": {
            "container": HTMLDivElement;
            "Things": HTMLDivElement;
            "Macros": HTMLDivElement;
            "VisualOptions": HTMLDivElement;
        };
        "MapSettings": {
            "container": HTMLDivElement;
            "Time": HTMLSelectElement;
            "Setting": {
                "Primary": HTMLSelectElement;
                "Secondary": HTMLSelectElement;
                "Tertiary": HTMLSelectElement;
            };
            "Area": HTMLSelectElement;
            "Location": HTMLSelectElement;
            "Entry": HTMLSelectElement;
        };
        "JSON": HTMLDivElement;
        "buttons": {
            "ClickToPlace": {
                "container": HTMLDivElement;
                "Things": HTMLDivElement;
                "Macros": HTMLDivElement;
            };
            "MapSettings": HTMLDivElement;
            "JSON": HTMLDivElement;
        }
    };
}

export interface ILevelEditrSettings {
    GameStarter: IGameStartr;
    prethings: { [i: string]: IPreThing[] };
    thingGroups: string[];
    things: { [i: string]: IThing };
    macros: { [i: string]: IMacro };
    beautifier: (text: string) => string;
    mapNameDefault?: string;
    mapTimeDefault?: number;
    mapSettingDefault?: string;
    mapEntrances?: string[];
    mapDefault?: IMapRaw;
    blocksize?: number;
    keyUndefined?: string;
}

/**
 * GUI-based level creation & editing for GameStartr.
 */
export interface ILevelEditr {
    getEnabled(): boolean;
    enable(): void;
    disable(): void;
    minimize(): void;
    maximize(): void;
    startBuilding(): void;
    startPlaying(): void;
    downloadCurrentJSON(): void;
    setCurrentJSON(json: string): void;
    loadCurrentJSON(): void;
    beautify(text: string): string;
    handleUploadCompletion(event: IDataProgressEvent): void;
}
