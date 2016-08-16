/// <reference path="../typings/AreaSpawnr.d.ts" />
/// <reference path="../typings/GameStartr.d.ts" />
/// <reference path="../typings/GroupHoldr.d.ts" />
/// <reference path="../typings/InputWritr.d.ts" />
/// <reference path="../typings/ItemsHoldr.d.ts" />
/// <reference path="../typings/MapsCreatr.d.ts" />
/// <reference path="../typings/MapScreenr.d.ts" />
/// <reference path="../typings/ObjectMakr.d.ts" />
/// <reference path="../typings/PixelDrawr.d.ts" />
/// <reference path="../typings/TimeHandlr.d.ts" />

export interface IThing extends GameStartr.IThing {
    dead: boolean;

    // These attributes appear to be FSM-specific...
    outerok?: number;
}

export interface IPreThing extends MapsCreatr.IPreThing {
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

export interface IMapRaw extends MapsCreatr.IMapRaw {
    areas: {
        [i: number]: IAreaRaw;
        [i: string]: IAreaRaw;
    };

    time?: number;
}

export interface IAreaRaw extends MapsCreatr.IAreaRaw {
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

export interface IThingIcon extends HTMLElement {
    options: any[];
}

export interface IDisplayContainer {
    "container": HTMLElement;
    "scrollers": {
        "container": HTMLElement;
        "left": HTMLElement;
        "right": HTMLElement;
    };
    "gui": HTMLElement;
    "head": HTMLElement;
    "namer": HTMLInputElement;
    "minimizer": HTMLElement;
    "stringer": {
        "textarea": HTMLTextAreaElement;
        "messenger": HTMLElement;
    };
    "inputDummy": HTMLInputElement;
    "sections": {
        "ClickToPlace": {
            "container": HTMLElement;
            "Things": HTMLElement;
            "Macros": HTMLElement;
            "VisualOptions": HTMLElement;
        };
        "MapSettings": {
            "container": HTMLElement;
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
        "JSON": HTMLElement;
        "buttons": {
            "ClickToPlace": {
                "container": HTMLElement;
                "Things": HTMLElement;
                "Macros": HTMLElement;
            };
            "MapSettings": HTMLElement;
            "JSON": HTMLElement;
        }
    };
}

export interface ILevelEditrSettings {
    GameStarter: GameStartr.GameStartr;
    prethings: { [i: string]: IPreThing[] };
    thingGroups: string[];
    things: { [i: string]: IThing };
    macros: { [i: string]: MapsCreatr.IMacro };
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
