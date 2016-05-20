/// <reference path="../pixelrendr/PixelRendr.d.ts" />
declare module "IPixelDrawr" {
    import { IPixelRendr, ISpriteMultiple } from "IPixelRendr";
    export interface IBoundingBox {
        top: number;
        right: number;
        bottom: number;
        left: number;
        width: number;
        height: number;
    }
    export interface IThingCanvases {
        direction: string;
        multiple: boolean;
        middle?: IThingSubCanvas;
        top?: IThingSubCanvas;
        right?: IThingSubCanvas;
        bottom?: IThingSubCanvas;
        left?: IThingSubCanvas;
        topRight?: IThingSubCanvas;
        bottomRight?: IThingSubCanvas;
        bottomLeft?: IThingSubCanvas;
        topLeft?: IThingSubCanvas;
    }
    export interface IThingSubCanvas {
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
    }
    export interface IThing extends IBoundingBox {
        sprite: Uint8ClampedArray | ISpriteMultiple;
        canvas: HTMLCanvasElement;
        canvases?: IThingCanvases;
        context: CanvasRenderingContext2D;
        hidden: boolean;
        opacity: number;
        numSprites?: number;
        offsetX?: number;
        offsetY?: number;
        repeat?: boolean;
        scale?: number;
        unitwidth?: number;
        unitheight?: number;
        spritewidth: number;
        spriteheight: number;
        spritewidthpixels?: number;
        spriteheightpixels?: number;
    }
    export interface IPixelDrawrSettings {
        PixelRender: IPixelRendr;
        boundingBox: IBoundingBox;
        createCanvas: (width: number, height: number) => HTMLCanvasElement;
        unitsize?: number;
        noRefill?: boolean;
        spriteCacheCutoff?: number;
        groupNames?: string[];
        framerateSkip?: number;
        generateObjectKey?: (thing: IThing) => string;
        epsilon?: number;
        keyWidth?: string;
        keyHeight?: string;
        keyTop?: string;
        keyRight?: string;
        keyBottom?: string;
        keyLeft?: string;
        keyOffsetX?: string;
        keyOffsetY?: string;
    }
    export interface IPixelDrawr {
        getFramerateSkip(): number;
        getThingArray(): IThing[][];
        getCanvas(): HTMLCanvasElement;
        getContext(): CanvasRenderingContext2D;
        getBackgroundCanvas(): HTMLCanvasElement;
        getBackgroundContext(): CanvasRenderingContext2D;
        getNoRefill(): boolean;
        getEpsilon(): number;
        setFramerateSkip(framerateSkip: number): void;
        setThingArrays(thingArrays: IThing[][]): void;
        setCanvas(canvas: HTMLCanvasElement): void;
        setNoRefill(noRefill: boolean): void;
        setEpsilon(epsilon: number): void;
        resetBackground(): void;
        setBackground(fillStyle: any): void;
        drawBackground(): void;
        setThingSprite(thing: IThing): void;
        refillGlobalCanvas(): void;
        refillThingArray(array: IThing[]): void;
        drawThingOnContext(context: CanvasRenderingContext2D, thing: IThing): void;
    }
}
declare module "PixelDrawr" {
    import { IPixelDrawr, IPixelDrawrSettings, IThing } from "IPixelDrawr";
    export class PixelDrawr implements IPixelDrawr {
        private PixelRender;
        private boundingBox;
        private canvas;
        private context;
        private backgroundCanvas;
        private backgroundContext;
        private thingArrays;
        private createCanvas;
        private unitsize;
        private generateObjectKey;
        private spriteCacheCutoff;
        private noRefill;
        private groupNames;
        private framerateSkip;
        private framesDrawn;
        private epsilon;
        constructor(settings: IPixelDrawrSettings);
        getFramerateSkip(): number;
        getThingArray(): IThing[][];
        getCanvas(): HTMLCanvasElement;
        getContext(): CanvasRenderingContext2D;
        getBackgroundCanvas(): HTMLCanvasElement;
        getBackgroundContext(): CanvasRenderingContext2D;
        getNoRefill(): boolean;
        getEpsilon(): number;
        setFramerateSkip(framerateSkip: number): void;
        setThingArrays(thingArrays: IThing[][]): void;
        setCanvas(canvas: HTMLCanvasElement): void;
        setNoRefill(noRefill: boolean): void;
        setEpsilon(epsilon: number): void;
        resetBackground(): void;
        setBackground(fillStyle: any): void;
        drawBackground(): void;
        setThingSprite(thing: IThing): void;
        refillGlobalCanvas(): void;
        refillThingArray(array: IThing[]): void;
        drawThingOnContext(context: CanvasRenderingContext2D, thing: IThing): void;
        private refillThingCanvasSingle(thing);
        private refillThingCanvasMultiple(thing);
        private drawThingOnContextSingle(context, canvas, thing, left, top);
        private drawThingOnContextMultiple(context, canvases, thing, left, top);
        private getTop(thing);
        private getRight(thing);
        private getBottom(thing);
        private getLeft(thing);
        private drawPatternOnContext(context, source, left, top, width, height, opacity);
    }
}
