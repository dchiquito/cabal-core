export = Cabal;
/**
 * Create a new cabal. This is the object handling all
 * local nickname -> mesh interactions for a single user.
 * @constructor
 * @param {string | Function} storage - A hyperdb compatible storage function, or a string representing the local data path.
 * @param {string | Buffer} key - a hypercore public key
 * @param {{
 *  maxFeeds?: any;
 *  modKeys?: any;
 *  adminKeys?: any;
 *  preferredPort?: any;
 *  db?: any;
 * }} opts
 */
declare function Cabal(storage: string | Function, key: string | Buffer, opts: {
    maxFeeds?: any;
    modKeys?: any;
    adminKeys?: any;
    preferredPort?: any;
    db?: any;
}): Cabal;
declare class Cabal {
    /**
     * Create a new cabal. This is the object handling all
     * local nickname -> mesh interactions for a single user.
     * @constructor
     * @param {string | Function} storage - A hyperdb compatible storage function, or a string representing the local data path.
     * @param {string | Buffer} key - a hypercore public key
     * @param {{
     *  maxFeeds?: any;
     *  modKeys?: any;
     *  adminKeys?: any;
     *  preferredPort?: any;
     *  db?: any;
     * }} opts
     */
    constructor(storage: string | Function, key: string | Buffer, opts: {
        maxFeeds?: any;
        modKeys?: any;
        adminKeys?: any;
        preferredPort?: any;
        db?: any;
    });
}
declare namespace Cabal {
    export { isHypercoreKey, DATABASE_VERSION as databaseVersion };
}
declare class Cabal extends events {
    constructor(storage: any, key: any, opts: any);
    maxFeeds: any;
    modKeys: any;
    adminKeys: any;
    preferredPort: any;
    key: any;
    db: any;
    kcore: any;
    feed: any;
    _swarm: any;
    _init: () => (fn: any, finish: any) => void;
    _initializeAsync: (fn: any, finish: any) => void;
    _waitForInit: (finish: any) => void;
    privateMessages: any;
    messages: any;
    channels: any;
    memberships: any;
    topics: any;
    users: any;
    moderation: any;
    archives: any;
    getDatabaseVersion(cb: any): void;
    /**
     * Get information about a user that they've volunteered about themselves.
     * @param {String} key - The hex key of the user.
     */
    getUser(key: string, cb: any): void;
    /**
     * Publish a message to your feed.
     * @param {String} message - The message to publish.
     * @param {Object} opts - Options
     * @param {function} cb - When message has been successfully added.
     */
    publish(message: string, opts: any, cb: Function): any;
    /**
     * Publish a message to your feed, encrypted to a specific recipient's key.
     * @param {Object} message - The message to publish.
     * @param {string|Buffer} recipientKey - A recipient's public key to encrypt the message to.
     * @param {function} cb - When the message has been successfully written.
     */
    publishPrivate(message: any, recipientKey: string | Buffer, cb: Function): void;
    publishNick(nick: any, cb: any): any;
    publishChannelTopic(channel: any, topic: any, cb: any): any;
    getLocalKey(cb: any): void;
    getMessage(feedAtSeq: any, cb: any): void;
    swarm(opts: any, cb: any): void;
    replicate(isInitiator: any, opts: any): any;
    ready(cb: any): void;
    _addConnection(key: any): void;
    _removeConnection(key: any): void;
    close(cb: any): void;
}
/**
 * @param {string | Buffer | any[]} key
 */
declare function isHypercoreKey(key: string | Buffer | any[]): boolean;
declare var DATABASE_VERSION: number;
import events = require("events");
