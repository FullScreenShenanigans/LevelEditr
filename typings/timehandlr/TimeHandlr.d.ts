declare module "ITimeHandlr" {
    export interface ICurrentEvents {
        [i: number]: ITimeEvent[];
    }
    export interface ITimeCycleSettings {
        length: number;
        [i: number]: boolean | string | IClassCalculator;
    }
    export interface ITimeCycle extends ITimeCycleSettings {
        event?: ITimeEvent;
        location?: number;
        oldclass?: number;
    }
    export interface ITimeCycles {
        [i: string]: ITimeCycle;
    }
    export interface IEventCallback {
        (...args: any[]): any;
    }
    export interface INumericCalculator {
        (...args: any[]): number;
    }
    export interface IRepeatCalculator {
        (...args: any[]): boolean;
    }
    export interface IClassCalculator {
        (thing: IThing, settings: ITimeCycle): string | boolean;
    }
    export interface IClassChanger {
        (thing: IThing, className: string): void;
    }
    export interface IThing {
        alive: boolean;
        className: string;
        cycles: {
            [i: string]: ITimeCycle;
        };
        onThingAdd: () => void;
        placed: boolean;
    }
    export interface ITimeEvent {
        time: number;
        callback: Function;
        args?: any[];
        repeat?: number | IRepeatCalculator;
        timeRepeat?: number | INumericCalculator;
        count?: number;
        scheduleNextRepeat(): number;
    }
    export interface ITimeHandlrSettings {
        timingDefault?: number;
        keyCycles?: string;
        keyClassName?: string;
        keyOnClassCycleStart?: string;
        keyDoClassCycleStart?: string;
        keyCycleCheckValidity?: string;
        copyCycleSettings?: boolean;
        classAdd?: IClassChanger;
        classRemove?: IClassChanger;
    }
    export interface ITimeHandlr {
        getTime(): number;
        getEvents(): ICurrentEvents;
        addEvent(callback: IEventCallback, timeDelay?: number | INumericCalculator, ...args: any[]): ITimeEvent;
        addEventInterval(callback: IEventCallback, timeDelay?: number | INumericCalculator, numRepeats?: number | IEventCallback, ...args: any[]): ITimeEvent;
        addEventIntervalSynched(callback: IEventCallback, timeDelay: number, numRepeats: number | IEventCallback, settings: ITimeCycle): ITimeEvent;
        addClassCycle(thing: IThing, settings: ITimeCycle, name?: string, timing?: number | INumericCalculator): ITimeCycle;
        addClassCycleSynched(thing: IThing, settings: ITimeCycle, name?: string, timing?: number | INumericCalculator): ITimeCycle;
        handleEvents(): void;
        handleEvent(event: ITimeEvent): number;
        cancelEvent(event: ITimeEvent): void;
        cancelAllEvents(): void;
        cancelClassCycle(thing: IThing, name: string): void;
        cancelAllCycles(thing: IThing): void;
    }
}
declare module "TimeEvent" {
    import { IEventCallback, INumericCalculator, ITimeEvent } from "ITimeHandlr";
    export class TimeEvent implements ITimeEvent {
        time: number;
        callback: Function;
        args: any[];
        repeat: number | IEventCallback;
        timeRepeat: number | INumericCalculator;
        count: number;
        constructor(callback: IEventCallback, repeat: number | INumericCalculator, time: number, timeRepeat: number | INumericCalculator, args?: any[]);
        scheduleNextRepeat(): number;
        static runCalculator(value: number | INumericCalculator, ...args: any[]): number;
    }
}
declare module "TimeHandlr" {
    import { ICurrentEvents, IEventCallback, ITimeCycle, ITimeCycleSettings, IThing, ITimeEvent, INumericCalculator, ITimeHandlr, ITimeHandlrSettings } from "ITimeHandlr";
    export class TimeHandlr implements ITimeHandlr {
        private time;
        private events;
        private timingDefault;
        private keyCycles;
        private keyClassName;
        private keyOnClassCycleStart;
        private keyDoClassCycleStart;
        private keyCycleCheckValidity;
        private copyCycleSettings;
        private classAdd;
        private classRemove;
        constructor(settings?: ITimeHandlrSettings);
        getTime(): number;
        getEvents(): ICurrentEvents;
        addEvent(callback: IEventCallback, timeDelay?: number | INumericCalculator, ...args: any[]): ITimeEvent;
        addEventInterval(callback: IEventCallback, timeDelay?: number | INumericCalculator, numRepeats?: number | IEventCallback, ...args: any[]): ITimeEvent;
        addEventIntervalSynched(callback: IEventCallback, timeDelay?: number | INumericCalculator, numRepeats?: number | IEventCallback, ...args: any[]): ITimeEvent;
        addClassCycle(thing: IThing, settings: ITimeCycleSettings, name?: string, timing?: number | INumericCalculator): ITimeCycle;
        addClassCycleSynched(thing: IThing, settings: ITimeCycle, name?: string, timing?: number | INumericCalculator): ITimeCycle;
        handleEvents(): void;
        handleEvent(event: ITimeEvent): number;
        cancelEvent(event: ITimeEvent): void;
        cancelAllEvents(): void;
        cancelClassCycle(thing: IThing, name: string): void;
        cancelAllCycles(thing: IThing): void;
        private setClassCycle(thing, settings, timing?, synched?);
        private cycleClass(thing, settings);
        private insertEvent(event);
        private makeSettingsCopy(original);
        private classAddGeneric(thing, className);
        private classRemoveGeneric(thing, className);
    }
}
