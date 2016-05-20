declare module "IGroupHoldr" {
    export interface IDictionary<T> {
        [i: string]: T;
    }
    export interface IGroups<T> {
        [i: string]: IDictionary<T> | T[];
    }
    export interface ITypesListing {
        [i: string]: {
            new (): any[] | Object;
        };
    }
    export interface IGroupHoldrFunction extends Function {
    }
    export interface IGroupHoldrSetGroupFunction<T> extends IGroupHoldrFunction {
        (value: IDictionary<T> | T[]): void;
    }
    export interface IGroupHoldrGetGroupFunction<T> extends IGroupHoldrFunction {
        (): IDictionary<T> | T[];
    }
    export interface IGroupHoldrSetFunction extends IGroupHoldrFunction {
        (key: string | number, value?: any): void;
    }
    export interface IGroupHoldrGetFunction extends IGroupHoldrFunction {
        (key: string | number): void;
    }
    export interface IGroupHoldrAddFunction extends IGroupHoldrFunction {
        (value: any, key?: string | number): void;
    }
    export interface IGroupHoldrArrayAddFunction extends IGroupHoldrAddFunction {
        (value: any, key?: number): void;
    }
    export interface IGroupHoldrObjectAddFunction extends IGroupHoldrAddFunction {
        (value: any, key: string): void;
    }
    export interface IGroupHoldrDeleteFunction extends IGroupHoldrFunction {
        (arg1?: any, arg2?: any): void;
    }
    export interface IGroupHoldrArrayDeleteFunction extends IGroupHoldrDeleteFunction {
        (value?: any, index?: number): void;
    }
    export interface IGroupHoldrObjectDeleteFunction extends IGroupHoldrDeleteFunction {
        (key: string): void;
    }
    export interface IGroupHoldrFunctionGroup<T extends IGroupHoldrFunction> {
        [i: string]: T;
    }
    export interface IFunctionGroups {
        setGroup: IGroupHoldrFunctionGroup<IGroupHoldrSetGroupFunction<any>>;
        getGroup: IGroupHoldrFunctionGroup<IGroupHoldrGetGroupFunction<any>>;
        set: IGroupHoldrFunctionGroup<IGroupHoldrSetFunction>;
        get: IGroupHoldrFunctionGroup<IGroupHoldrGetFunction>;
        add: IGroupHoldrFunctionGroup<IGroupHoldrAddFunction>;
        delete: IGroupHoldrFunctionGroup<IGroupHoldrDeleteFunction>;
    }
    export interface IGroupHoldrSettings {
        groupNames: string[];
        groupTypes: string | {
            [i: string]: string;
        };
    }
    export interface IGroupHoldr {
        getFunctions(): IFunctionGroups;
        getGroups(): IGroups<any>;
        getGroup(name: string): {
            [i: string]: any;
        } | any[];
        getGroupNames(): string[];
        switchMemberGroup(value: any, groupNameOld: string, groupNameNew: string, keyOld?: string | number, keyNew?: string | number): void;
        applyAll(scope: any, func: (...args: any[]) => any, args?: any[]): void;
        applyOnAll(scope: any, func: (...args: any[]) => any, args?: any[]): void;
        callAll(scope: any, func: (...args: any[]) => any, ...args: any[]): void;
        callOnAll(scope: any, func: (...args: any[]) => any, ...args: any[]): void;
        clearArrays(): void;
    }
}
declare module "GroupHoldr" {
    import { IFunctionGroups, IGroups, IGroupHoldr, IGroupHoldrSettings } from "IGroupHoldr";
    export class GroupHoldr implements IGroupHoldr {
        private groups;
        private functions;
        private groupNames;
        private groupTypes;
        private groupTypeNames;
        constructor(settings: IGroupHoldrSettings);
        getFunctions(): IFunctionGroups;
        getGroups(): IGroups<any>;
        getGroup(name: string): {
            [i: string]: any;
        } | any[];
        getGroupNames(): string[];
        switchMemberGroup(value: any, groupNameOld: string, groupNameNew: string, keyOld?: string | number, keyNew?: string | number): void;
        applyAll(scope: any, func: (...args: any[]) => any, args?: any[]): void;
        applyOnAll(scope: any, func: (...args: any[]) => any, args?: any[]): void;
        callAll(scope: any, func: (...args: any[]) => any): void;
        callOnAll(scope: any, func: (...args: any[]) => any): void;
        clearArrays(): void;
        private setGroupNames(names, types);
        private clearFunctions();
        private setGroups();
        private createFunctions();
        private createFunctionSetGroup(name);
        private createFunctionGetGroup(name);
        private createFunctionSet(name);
        private createFunctionGet(name);
        private createFunctionAdd(name);
        private createFunctionDelete(name);
        private getTypeName(str);
        private getTypeFunction(str);
    }
}
