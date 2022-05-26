declare function _exports(lvl: any): {
    maxBatch: number;
    map: (msgs: any, next: any) => void;
    api: {
        getMemberships: (core: any, key: any, cb: any) => void;
        getUsers: (core: any, channel: any, cb: any) => void;
        isMember: (core: any, key: any, channel: any, cb: any) => void;
        events: EventEmitter;
    };
    storeState: (state: any, cb: any) => void;
    fetchState: (cb: any) => void;
    clearIndex: (cb: any) => void;
};
export = _exports;
import EventEmitter_1 = require("events");
import EventEmitter = EventEmitter_1.EventEmitter;
