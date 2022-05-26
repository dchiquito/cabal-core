declare function _exports(lvl: any): {
    maxBatch: number;
    map: (msgs: any, next: any) => void;
    api: {
        get: (core: any, cb: any) => void;
        events: EventEmitter;
    };
    storeState: (state: any, cb: any) => void;
    fetchState: (cb: any) => void;
};
export = _exports;
import EventEmitter_1 = require("events");
import EventEmitter = EventEmitter_1.EventEmitter;
