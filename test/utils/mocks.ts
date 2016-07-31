/// <reference path="../../lib/LevelEditr.d.ts" />
/// <reference path="../../typings/AreaSpawnr.d.ts" />
/// <reference path="../../typings/GroupHoldr.d.ts" />
/// <reference path="../../typings/InputWritr.d.ts" />
/// <reference path="../../typings/ItemsHoldr.d.ts" />
/// <reference path="../../typings/MapsCreatr.d.ts" />
/// <reference path="../../typings/MapScreenr.d.ts" />
/// <reference path="../../typings/ObjectMakr.d.ts" />
/// <reference path="../../typings/PixelDrawr.d.ts" />
/// <reference path="../../typings/TimeHandlr.d.ts" />

const mocks = {
    /**
     * 
     */
    mockLevelEditr: (settings: LevelEditr.ILevelEditrSettings = mocks.mockLevelEditrSettings): LevelEditr.ILevelEditr => {
        return new LevelEditr.LevelEditr(settings);
    }
};
