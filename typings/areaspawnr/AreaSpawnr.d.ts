/// <reference path="../mapscreatr/MapsCreatr.d.ts" />
/// <reference path="../mapscreenr/MapScreenr.d.ts" />
declare module "IAreaSpawnr" {
    import { IArea, ILocation, IMap, IMapsCreatr, IPreThingsContainers } from "IMapsCreatr";
    import { IMapScreenr } from "IMapScreenr";
    import { IPreThing, IPreThingSettings } from "IPreThing";
    import { ICommandAdder } from "IAreaSpawnr";
    export interface ICommandAdder {
        (thing: string | IPreThingSettings, index: number): void;
    }
    export interface IAreaSpawnrSettings {
        MapsCreator: IMapsCreatr;
        MapScreener: IMapScreenr;
        onSpawn?: (prething: IPreThing) => void;
        onUnspawn?: (prething: IPreThing) => void;
        screenAttributes?: string[];
        stretchAdd?: ICommandAdder;
        afterAdd?: ICommandAdder;
        commandScope?: any;
    }
    export interface IAreaSpawnr {
        getMapsCreator(): IMapsCreatr;
        getMapScreener(): IMapScreenr;
        getScreenAttributes(): string[];
        getMapName(): string;
        getMap(name?: string): IMap;
        getMaps(): {
            [i: string]: IMap;
        };
        getArea(): IArea;
        getAreaName(): string;
        getLocation(location: string): ILocation;
        getLocationEntered(): ILocation;
        getPreThings(): IPreThingsContainers;
        setMap(name: string, location?: string): IMap;
        setLocation(name: string): void;
        setStretches(stretchesRaw: (string | IPreThingSettings)[]): void;
        setAfters(aftersRaw: (string | IPreThingSettings)[]): void;
        spawnArea(direction: string, top: number, right: number, bottom: number, left: number): void;
        unspawnArea(direction: string, top: number, right: number, bottom: number, left: number): void;
    }
}
declare module "AreaSpawnr" {
    import { IArea, ILocation, IMap, IMapsCreatr, IPreThingsContainers } from "IMapsCreatr";
    import { IMapScreenr } from "IMapScreenr";
    import { IPreThingSettings } from "IPreThing";
    import { IAreaSpawnr, IAreaSpawnrSettings } from "IAreaSpawnr";
    export class AreaSpawnr implements IAreaSpawnr {
        static directionKeys: {
            [i: string]: string;
        };
        static directionOpposites: {
            [i: string]: string;
        };
        private MapsCreator;
        private MapScreener;
        private screenAttributes;
        private mapCurrent;
        private areaCurrent;
        private locationEntered;
        private mapName;
        private prethings;
        private onSpawn;
        private onUnspawn;
        private stretches;
        private stretchAdd;
        private afters;
        private afterAdd;
        private commandScope;
        constructor(settings: IAreaSpawnrSettings);
        getMapsCreator(): IMapsCreatr;
        getMapScreener(): IMapScreenr;
        getScreenAttributes(): string[];
        getMapName(): string;
        getMap(name?: string): IMap;
        getMaps(): {
            [i: string]: IMap;
        };
        getArea(): IArea;
        getAreaName(): string;
        getLocation(location: string): ILocation;
        getLocationEntered(): ILocation;
        getPreThings(): IPreThingsContainers;
        setMap(name: string, location?: string): IMap;
        setLocation(name: string): void;
        setStretches(stretchesRaw: (string | IPreThingSettings)[]): void;
        setAfters(aftersRaw: (string | IPreThingSettings)[]): void;
        spawnArea(direction: string, top: number, right: number, bottom: number, left: number): void;
        unspawnArea(direction: string, top: number, right: number, bottom: number, left: number): void;
        private applySpawnAction(callback, status, direction, top, right, bottom, left);
        private findPreThingsSpawnStart(direction, group, mid, top, right, bottom, left);
        private findPreThingsSpawnEnd(direction, group, mid, top, right, bottom, left);
        private getDirectionEnd(directionKey, top, right, bottom, left);
    }
}
