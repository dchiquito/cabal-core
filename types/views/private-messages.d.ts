declare function _exports(keypair: {
    public;
    private;
}, lvl: LevelUp): {
    maxBatch: number;
    map: (msgs: any, next: any) => void;
    api: {
        /**
         * List the public keys of all of the users who we have had exchanged private messages with.
         */
        list: (core: any, cb: any) => void;
        /**
         * Creates a read stream of decrypted private messages
         * @param {Object} core - HyperCore to stream messages from.
         * @param {String} key - Public key (hex) of the other party.
         * @param {Object} opts :
         *      `gt` {Number} - Filter by timestamp where message.timestamp is greater than `gt`
         *      `lt` {Number} - Filter by timestamp where message.timestamp is lesser than `lt`
         *       Supports all levelup.createValueStream() options as well:
         *      `reverse` {Boolean} - Streams messages in Ascending time order, default: `true` (Descending)
         */
        read: (core: any, key: string, opts: any) => any;
        events: EventEmitter;
    };
    storeState: (state: any, cb: any) => void;
    fetchState: (cb: any) => void;
};
export = _exports;
import EventEmitter_1 = require("events");
import EventEmitter = EventEmitter_1.EventEmitter;
