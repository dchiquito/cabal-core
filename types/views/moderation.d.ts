declare function _exports(cabal: any, authDb: any, infoDb: any): {
    maxBatch: number;
    map: (...args: any[]) => any;
    api: {
        events: EventEmitter;
        listBlocks: (...args: any[]) => any;
        listHides: (...args: any[]) => any;
        listMutes: (...args: any[]) => any;
        listByFlag: (...args: any[]) => any;
        getFlags: (...args: any[]) => any;
        list: (...args: any[]) => any;
        listModerationBy: (core: any, key: any, cb: any) => any;
        setFlags: (core: any, opts: any, cb: any) => void;
        addFlags: (core: any, opts: any, cb: any) => void;
        removeFlags: (core: any, opts: any, cb: any) => void;
    };
    storeState: (state: any, cb: any) => void;
    fetchState: (cb: any) => void;
    clearIndex: (cb: any) => void;
};
export = _exports;
import EventEmitter_1 = require("events");
import EventEmitter = EventEmitter_1.EventEmitter;
