# Changelog

## [15.0.0] - 2021-11-22

The major bump is due to breaking compat with the previously defined PM API; this change does
bump the protocol version & is technically wire-compatible with clients running cabal-core versions 14.x.x.

### Changed

The private messages API is now:

- `cabal.publishPrivate(message, recipientKey, cb)`
- it now only takes objects, instead of previously only accepting strings
- it accepts message types conforming to `chat/*` e.g. `chat/text` or `chat/emote`
- a property `private` is injected into all private messages published via `publishPrivate`

Before this change the API was `cabal.publishPrivateMessage(text, recipientKey, cb)`, this has
now been removed.

Change by [**@hackergrrl**](https://github.com/hackergrrl) and [**@cblgh**](https://github.com/cblgh).

### Fixed

- fixed a race condition when initializing async views ([#108](https://github.com/cabal-club/cabal-core/issues/108)) ([**@cblgh**](https://github.com/cblgh))

## [14.1.2] - 2021-10-18

### Added

- Docs: Add Table of Contents ([`fc66637`](https://github.com/cabal-club/cabal-core/commit/fc66637)) ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Docs: Add CHANGELOG.md, documenting all versions since start of project (([`d3f157a`](https://github.com/cabal-club/cabal-core/commit/d3f157a)) -> [`d8c83ae`](https://github.com/cabal-club/cabal-core/commit/d8c83ae)) ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Docs: Document changelog under Developing section ([`2b6b8f7`](https://github.com/cabal-club/cabal-core/commit/2b6b8f7)) ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Docs: Add changelog:fix script (to fill in details) ([`3dcf1b0`](https://github.com/cabal-club/cabal-core/commit/3dcf1b0)) ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Docs: Add changelog scripts to `package.json` ([`e64244c`](https://github.com/cabal-club/cabal-core/commit/e64244c)) ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Fixed

- revert removal of hyperswarm-web ([`0f7389a`](https://github.com/cabal-club/cabal-core/commit/0f7389a)) ([**@cblgh**](https://github.com/cblgh)).
- Fixes author field in package.json. ([`57e76c6`](https://github.com/cabal-club/cabal-core/commit/57e76c6)) ([**@hackergrrl**](https://github.com/hackergrrl))

## [14.1.1] - 2021-09-15

### Changed

- Upgrade `sodium-universal` for faster installs ([#106](https://github.com/cabal-club/cabal-core/issues/106)) ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Added

- Add missing `kappa-view` dependency ([**@hackergrrl**](https://github.com/hackergrrl))

### Removed

- Remove unused dependencies ([**@hackergrrl**](https://github.com/hackergrrl))

## [14.1.0] - 2021-08-21

### Added

- Export `Cabal.isHypercoreKey` ([#105](https://github.com/cabal-club/cabal-core/issues/105)) ([**@cblgh**](https://github.com/cblgh))

## [14.0.0] - 2021-05-18

_Breaking change since `kappa-core` indirectly pulls in `hypercore@9.x`. Also see [comment](https://github.com/cabal-club/cabal-core/pull/104#issuecomment-826375010)._

### Changed

- **Breaking:** update core dependencies and set browser field in `package.json` ([#104](https://github.com/cabal-club/cabal-core/issues/104)) ([**@cblgh**](https://github.com/cblgh))

### Added

- Add private messages ([#69](https://github.com/cabal-club/cabal-core/issues/69)) ([**@hackergrrl**](https://github.com/hackergrrl))

### Fixed

- Use swarm.js's passed in opts ([#104](https://github.com/cabal-club/cabal-core/issues/104)) ([**@cblgh**](https://github.com/cblgh))

## [13.2.0] - 2021-03-06

### Added

- Implement the basics of a channel archiving view ([#103](https://github.com/cabal-club/cabal-core/issues/103)) ([**@cblgh**](https://github.com/cblgh))

## [13.1.0] - 2021-01-12

### Changed

- Document possible flags for `listByFlag()` ([#94](https://github.com/cabal-club/cabal-core/issues/94)) ([**@garbados**](https://github.com/garbados))

### Added

- Add `.preferredPort` (default 13331) to core opts ([#101](https://github.com/cabal-club/cabal-core/issues/101)) ([**@cblgh**](https://github.com/cblgh))

## [13.0.2] - 2020-06-24

### Fixed

- Change duplexify to object mode for moderation streams ([#95](https://github.com/cabal-club/cabal-core/issues/95)) ([`9ab9c74`](https://github.com/cabal-club/cabal-core/commit/9ab9c74)) ([**@garbados**](https://github.com/garbados))

## [13.0.1] - 2020-06-22

### Fixed

- Wait for core to pause before closing ([`a70505b`](https://github.com/cabal-club/cabal-core/commit/a70505b)) ([**@hackergrrl**](https://github.com/hackergrrl))

## [13.0.0] - 2020-06-07

### Fixed

- **Breaking:** fix crypto server/client orientation ([`2132439`](https://github.com/cabal-club/cabal-core/commit/2132439)) ([**@hackergrrl**](https://github.com/hackergrrl))

## [12.0.1] - 2020-06-05

### Fixed

- Change sublevel names for moderation view to force index regen ([`4f35ed1`](https://github.com/cabal-club/cabal-core/commit/4f35ed1)) ([**@hackergrrl**](https://github.com/hackergrrl))
- Add clearIndex lifecycle to channel-membership ([`3b6eaeb`](https://github.com/cabal-club/cabal-core/commit/3b6eaeb)) ([**@hackergrrl**](https://github.com/hackergrrl))

## [12.0.0] - 2020-05-22

_This was released as a new major since `11.2.1` most likely contained breaking changes._

### Changed

- Update ocumentation ([`e6052a4`](https://github.com/cabal-club/cabal-core/commit/e6052a4)) ([**@hackergrrl**](https://github.com/hackergrrl))

## [11.2.1] - 2020-05-22

_This version was never published to npm._

### Changed

- Skip failing moderation tests ([`e231a73`](https://github.com/cabal-club/cabal-core/commit/e231a73)) ([**@hackergrrl**](https://github.com/hackergrrl))
- Update tests to use opts.{mod,admin}Keys ([`5f122b7`](https://github.com/cabal-club/cabal-core/commit/5f122b7)) ([**@hackergrrl**](https://github.com/hackergrrl))
- Bump version in moderation view ([`d0ad002`](https://github.com/cabal-club/cabal-core/commit/d0ad002)) ([**@hackergrrl**](https://github.com/hackergrrl))

### Fixed

- Fix skipped failing tests ([`e233483`](https://github.com/cabal-club/cabal-core/commit/e233483)) ([**@substack**](https://github.com/substack))
- Remove admins/mods if they are no longer in {admin,mod}Keys ([`626d65f`](https://github.com/cabal-club/cabal-core/commit/626d65f)) ([**@hackergrrl**](https://github.com/hackergrrl))
- Fix some more mod view lifecycle things ([`d6d577b`](https://github.com/cabal-club/cabal-core/commit/d6d577b)) ([**@hackergrrl**](https://github.com/hackergrrl))
- Fix moderation view clearing race condition ([`d997041`](https://github.com/cabal-club/cabal-core/commit/d997041)) ([**@hackergrrl**](https://github.com/hackergrrl))
- Receive admin/mod keys intead of parsing them ([`5c7cb7a`](https://github.com/cabal-club/cabal-core/commit/5c7cb7a)) ([**@hackergrrl**](https://github.com/hackergrrl))
- Add lifecycle management to mod view ([`70c86c4`](https://github.com/cabal-club/cabal-core/commit/70c86c4)) ([**@hackergrrl**](https://github.com/hackergrrl))
- Have list wait for the view to be ready ([`0214803`](https://github.com/cabal-club/cabal-core/commit/0214803)) ([**@hackergrrl**](https://github.com/hackergrrl))

## [11.2.0] - 2020-05-22

_Changes in this version were based on top of `11.0.2` but with functionality from `11.1.1` merged in._

### Added

- Add `listModerationBy()` and secondary index ([#87](https://github.com/cabal-club/cabal-core/issues/87)) ([**@substack**](https://github.com/substack))

## [11.1.1] - 2020-05-22

### Fixed

- Use regex to capture cabal key instead of URL ([#89](https://github.com/cabal-club/cabal-core/issues/89)) ([**@cblgh**](https://github.com/cblgh))

## [11.1.0] - 2020-05-21

### Changed

- Use admin for admins, instead of mod ([**@cblgh**](https://github.com/cblgh))

### Added

- Add test for setting multiple admins and mods in the cabal addr ([**@substack**](https://github.com/substack))

### Fixed

- Add fixes for admin and mod keys in cabal urls ([**@substack**](https://github.com/substack))

## [11.0.2] - 2020-05-21

### Changed

- Drop node 8 support, add node 12 ([**@hackergrrl**](https://github.com/hackergrrl))
- Move moderation events to api ([**@hackergrrl**](https://github.com/hackergrrl))

## [11.0.1] - 2020-05-20

### Fixed

- Remove flag for moderation ([**@substack**](https://github.com/substack))

## [11.0.0] - 2020-05-20

### Added

- **Breaking:** add moderation based on flags ([#83](https://github.com/cabal-club/cabal-core/issues/83)) ([**@substack**](https://github.com/substack))
- Add support for `mod` and `admin` keys in cabal key uri ([**@cblgh**](https://github.com/cblgh))
- Add `cabal.close()` ([**@hackergrrl**](https://github.com/hackergrrl))

### Removed

- Remove `package-lock.json` ([#84](https://github.com/cabal-club/cabal-core/issues/84)) ([**@substack**](https://github.com/substack))

## [10.0.1] - 2020-05-01

### Changed

- Update `hyperswarm` to `2.13.x` ([#74](https://github.com/cabal-club/cabal-core/issues/74)) ([**@nikolaiwarner**](https://github.com/nikolaiwarner))
- Update `package-lock.json` (here we go again) ([#74](https://github.com/cabal-club/cabal-core/issues/74)) ([**@nikolaiwarner**](https://github.com/nikolaiwarner))

## [10.0.0] - 2020-03-23

### Changed

- **Breaking:** use hyperswarm. This removes `discovery-swarm` for finding peers. Peers before this commit
  will not be able to discover peers from this commit onwards ([#71](https://github.com/cabal-club/cabal-core/issues/71)) ([**@hackergrrl**](https://github.com/hackergrrl))

### Added

- Add `FUNDING.yml` ([**@cblgh**](https://github.com/cblgh))

## [9.0.3] - 2020-04-09

### Removed

- Remove block logic ([**@hackergrrl**](https://github.com/hackergrrl))

## [9.0.2] - 2019-12-11

### Fixed

- Add missing parameter in `isFutureMonotonicTimestamp()` ([#68](https://github.com/cabal-club/cabal-core/issues/68)) ([**@okdistribute**](https://github.com/okdistribute))

## [9.0.1] - 2019-12-04

### Added

- Add `cblgh.org` ([#67](https://github.com/cabal-club/cabal-core/issues/67)) ([**@cblgh**](https://github.com/cblgh))
- Add nick disco server ([#67](https://github.com/cabal-club/cabal-core/issues/67)) ([**@hackergrrl**](https://github.com/hackergrrl))
- Add dns-discovery server: eight45.net ([#67](https://github.com/cabal-club/cabal-core/issues/67)) ([**@hackergrrl**](https://github.com/hackergrrl))

## [9.0.0] - 2019-11-21

### Changed

- **Breaking:** upgrade hypercore (via multifeed) ([#61](https://github.com/cabal-club/cabal-core/issues/61)) ([**@hackergrrl**](https://github.com/hackergrrl))
- Update `kappa-core` to `6.x` ([**@hackergrrl**](https://github.com/hackergrrl))
- Use `hypercore-crypto` to generate test key ([**@hackergrrl**](https://github.com/hackergrrl))

### Added

- Add node 10 ([#61](https://github.com/cabal-club/cabal-core/issues/61)) ([**@hackergrrl**](https://github.com/hackergrrl))

### Fixed

- Wait for view to be ready on mod api ([#61](https://github.com/cabal-club/cabal-core/issues/61)) ([**@hackergrrl**](https://github.com/hackergrrl))
- Encode now-timestamps to avoid overwrites ([#62](https://github.com/cabal-club/cabal-core/issues/62)) ([**@hackergrrl**](https://github.com/hackergrrl))

## [8.0.1] - 2019-10-09

### Fixed

- Fix swarm hashing ([**@hackergrrl**](https://github.com/hackergrrl))

## [8.0.0] - 2019-10-09

### Changed

- **Breaking:** hash cabal key with blake2b ([**@hackergrrl**](https://github.com/hackergrrl))
- Replace `memdb` with `level-mem` ([#57](https://github.com/cabal-club/cabal-core/issues/57)) ([**@vweevers**](https://github.com/vweevers))

## [7.2.1] - 2019-08-27

### Added

- Add moderation view ([#45](https://github.com/cabal-club/cabal-core/issues/45)) ([**@substack**](https://github.com/substack), [**@hackergrrl**](https://github.com/hackergrrl))

### Fixed

- Set max listeners for `Cabal` event emitter ([#50](https://github.com/cabal-club/cabal-core/issues/50)) ([**@cblgh**](https://github.com/cblgh))
- Fix a case where channel membership indexing hangs ([**@hackergrrl**](https://github.com/hackergrrl))
- Let the network test ignore swarm blocking logic (blocking on remote key instead of host and port) ([**@hackergrrl**](https://github.com/hackergrrl))

## [7.2.0] - 2019-08-20

### Added

- Add channel membership view ([#52](https://github.com/cabal-club/cabal-core/issues/52)) ([**@cblgh**](https://github.com/cblgh))

## [7.1.0] - 2019-08-19

### Changed

- Throttle or block misbehaving peers by host and port ([**@hackergrrl**](https://github.com/hackergrrl))

## [7.0.1] - 2019-08-04

### Changed

- Use the same cabal key consistently ([**@hackergrrl**](https://github.com/hackergrrl))

## [7.0.0] - 2019-08-04

### Changed

- **Breaking:** enable multifeed protocol encryption ([**@hackergrrl**](https://github.com/hackergrrl))

### Fixed

- Fix net swarm test by using a real hypercore key ([**@hackergrrl**](https://github.com/hackergrrl))

## [6.0.2] - 2019-08-03

- Remove `package-lock.json` (again) ([**@hackergrrl**](https://github.com/hackergrrl))

## [6.0.1] - 2019-07-31

### Added

- Add `debug` logging under `cabal` for network errors ([**@hackergrrl**](https://github.com/hackergrrl))

## [6.0.0] - 2019-07-03

### Changed

- **Breaking:** update `kappa-core` to `4.x` ([**@hackergrrl**](https://github.com/hackergrrl))
- Update `discovery-swarm` to `6.x` ([**@hackergrrl**](https://github.com/hackergrrl))

### Removed

- Remove `package-lock.json` (again) ([**@hackergrrl**](https://github.com/hackergrrl))

## [5.1.2] - 2019-06-03

### Removed

- Remove `package-lock.json` ([**@hackergrrl**](https://github.com/hackergrrl))

### Fixed

- Set `.maxFeeds` default to `1024` in `cabal.replicate()` ([**@hackergrrl**](https://github.com/hackergrrl))

## [5.1.1] - 2019-05-26

### Changed

- Update `kappa-view-level` to `^2.0.0` ([**@hackergrrl**](https://github.com/hackergrrl))

### Fixed

- Use `base64` for channel view state ([**@hackergrrl**](https://github.com/hackergrrl))

## [5.1.0] - 2019-05-26

### Added

- Add `.db` option to `Cabal` constructor for durable storage ([#41](https://github.com/cabal-club/cabal-core/issues/41)) ([**@substack**](https://github.com/substack))
- Add `cabal.ready(cb)` ([#41](https://github.com/cabal-club/cabal-core/issues/41)) ([**@substack**](https://github.com/substack))

## [5.0.1] - 2019-05-21

### Changed

- Update `kappa-core` to `^3.0.1` ([**@hackergrrl**](https://github.com/hackergrrl))
- Update `concat-stream` to `^2.0.0` ([**@hackergrrl**](https://github.com/hackergrrl))
- Update `through2` to `^3.0.1` ([**@hackergrrl**](https://github.com/hackergrrl))

## [5.0.0] - 2019-05-21

### Changed

- **Breaking:** use `discovery-swarm` to shuttle around peer id (`swarm` function now calls back with swarm) ([#39](https://github.com/cabal-club/cabal-core/issues/39)) ([**@hackergrrl**](https://github.com/hackergrrl))
- **Breaking:** add options parameter to `cabal.replicate(opts)` (`.maxFeeds` no longer passed indirectly via the `Cabal` constructor) ([#39](https://github.com/cabal-club/cabal-core/issues/39)) ([**@hackergrrl**](https://github.com/hackergrrl))

### Added

- Expose swarm functionality via `cabal.swarm(cb)` ([#39](https://github.com/cabal-club/cabal-core/issues/39)) ([**@hackergrrl**](https://github.com/hackergrrl))

### Removed

- Remove node 6 from travis ([**@hackergrrl**](https://github.com/hackergrrl))
- Remove `multifeed` dependency ([**@hackergrrl**](https://github.com/hackergrrl))

## [4.0.1] - 2019-05-08

### Added

- Add an option to set the `.maxFeeds` option of `hypercore-protocol` when replicating ([#33](https://github.com/cabal-club/cabal-core/issues/33)) ([**@nikolaiwarner**](https://github.com/nikolaiwarner))

### Fixed

- Allow options for `messages.read()` to take priority over defaults ([#29](https://github.com/cabal-club/cabal-core/issues/29)) ([**@telamon**](https://github.com/telamon))
- Fix error propagation bug in topics view ([#30](https://github.com/cabal-club/cabal-core/issues/30)) ([**@telamon**](https://github.com/telamon))

## [4.0.0] - 2018-11-16

_This release was based partly from `3.0.4` but also merged in changes from `3.1.0`. Check git history for more fine grained details._

### Changed

- **Breaking:** renamed `cabal.protocolVersion` to `cabal.databaseVersion` ([#28](https://github.com/cabal-club/cabal-core/issues/28)) ([**@cblgh**](https://github.com/cblgh))
- **Breaking:** renamed `cabal.getProtocolVersion()` to `cabal.getDatabaseVersion()` ([#28](https://github.com/cabal-club/cabal-core/issues/28)) ([**@cblgh**](https://github.com/cblgh))

## [3.0.4] - 2018-11-11

_This version was published to npm after `3.1.0` and is almost identical. We therefore only list the changes for `3.0.4` and omit the `3.1.0` version._

### Added

- Add view for `topics` ([#24](https://github.com/cabal-club/cabal-core/issues/24)) ([**@nikolaiwarner**](https://github.com/nikolaiwarner))
- Add `cabal.publishChannelTopic()` ([#24](https://github.com/cabal-club/cabal-core/issues/24)) ([**@nikolaiwarner**](https://github.com/nikolaiwarner))

### Removed

- Remove unused requires ([#25](https://github.com/cabal-club/cabal-core/issues/25)) ([**@cblgh**](https://github.com/cblgh))

### Fixed

- Fix reliable key exchange ([#27](https://github.com/cabal-club/cabal-core/issues/27)) ([**@hackergrrl**](https://github.com/hackergrrl))

## [3.0.3] - 2018-11-06

### Added

- Add `cabal.protocolVersion` as `1.0.0` ([#25](https://github.com/cabal-club/cabal-core/issues/25)) ([**@cblgh**](https://github.com/cblgh))
- Add `cabal.getProtocolVersion()` ([#25](https://github.com/cabal-club/cabal-core/issues/25)) ([**@cblgh**](https://github.com/cblgh))

### Removed

- Remove unused `crypto` dependency ([#21](https://github.com/cabal-club/cabal-core/issues/21)) ([**@lachenmayer**](https://github.com/lachenmayer))

### Fixed

- Reorder function calls in `cabal.publishNick()` ([#25](https://github.com/cabal-club/cabal-core/issues/25)) ([**@cblgh**](https://github.com/cblgh))

## [3.0.2] - 2018-09-05

_There were several tags in between version `3.0.0` and `2.3.0` where [**@hackergrrl**](https://github.com/hackergrrl) were developing on a separate branch while things were happening on master. Versions `2.3.1`, `3.0.0` and `3.0.1` never got published to npm. Major API rewrite._

### Changed

- Rename module from `cabal-node` to `cabal-core` ([**@hackergrrl**](https://github.com/hackergrrl))
- Base storage on `kappa` instead of `hyperdb` ([**@hackergrrl**](https://github.com/hackergrrl))

### Added

- Add `cabal.getUser()` ([**@hackergrrl**](https://github.com/hackergrrl))
- Add `cabal.publish()` ([**@hackergrrl**](https://github.com/hackergrrl))
- Add `cabal.publishNick()` ([**@hackergrrl**](https://github.com/hackergrrl))
- Add `cabal.getLocalKey()` ([**@hackergrrl**](https://github.com/hackergrrl))
- Add views for `channels`, `messages` and `users` ([**@hackergrrl**](https://github.com/hackergrrl))

### Removed

- **Breaking:** remove `cabal.onconnection()` ([**@hackergrrl**](https://github.com/hackergrrl))
- **Breaking:** remove `cabal.watch()` ([**@hackergrrl**](https://github.com/hackergrrl))
- **Breaking:** remove `cabal.getMessages()` ([**@hackergrrl**](https://github.com/hackergrrl))
- **Breaking:** remove `cabal.getChannels()` ([**@hackergrrl**](https://github.com/hackergrrl))
- **Breaking:** remove `cabal.joinChannel()` ([**@hackergrrl**](https://github.com/hackergrrl))
- **Breaking:** remove `cabal.leaveChannel()` ([**@hackergrrl**](https://github.com/hackergrrl))
- **Breaking:** remove `cabal.createReadStream()` ([**@hackergrrl**](https://github.com/hackergrrl))
- **Breaking:** remove `cabal.metadata()` ([**@hackergrrl**](https://github.com/hackergrrl))
- **Breaking:** remove `cabal.message()` ([**@hackergrrl**](https://github.com/hackergrrl))

## [2.3.0] - 2018-08-13

_This version was published both as `cabal-node` and `cabal-core`._

### Changed

- Sort the channel list alphabetically ([#8](https://github.com/cabal-club/cabal-core/issues/8)) ([**@cinnamon-bun**](https://github.com/cinnamon-bun))

## [2.2.0] - 2018-06-23

_This version was published as `cabal-node`. Should have been a patch instead of a minor version._

### Fixed

- Update `hyperdb` to `3.1.2` to fix a connection issue ([**@cblgh**](https://github.com/cblgh))

## [2.1.1] - 2018-05-29

_This version was published as `cabal-node`._

### Fixed

- Fix bug where `cabal.leaveChannel()` didn't actually leave the channel ([**@okdistribute**](https://github.com/okdistribute))

## [2.1.0] - 2018-05-29

_This should have been a patch instead of a minor version. Not published to npm._

### Changed

- Change how channels are stored internally ([**@okdistribute**](https://github.com/okdistribute))

## [2.0.1] - 2018-05-27

_This version was published as `cabal-node`. Should have been a minor instead of a patch version._

### Added

- Add message type. Defaults to `'chat/text'` ([**@cblgh**](https://github.com/cblgh))

## [2.0.0] - 2018-05-24

_This version was published as `cabal-node`._

### Changed

- **Breaking:** change on-disk format to improve performance getting channel list ([#2](https://github.com/cabal-club/cabal-core/issues/2)) ([**@okdistribute**](https://github.com/okdistribute))
- Batch multiple transactions ([**@cblgh**](https://github.com/cblgh))

### Added

- Add methods for getting messages and channels ([#1](https://github.com/cabal-club/cabal-core/issues/1)) ([**@cblgh**](https://github.com/cblgh))
- Add watch function for db messages ([**@okdistribute**](https://github.com/okdistribute))

### Fixed

- Don't store timezone offset in database messages ([**@cblgh**](https://github.com/cblgh))
- Return the largest value on conflict ([**@cblgh**](https://github.com/cblgh))
- Fix database keys and channel regex ([**@cblgh**](https://github.com/cblgh))

## [1.0.0] - 2018-05-16

_This version was published as `cabal-node`._

:seedling: Initial release.

[15.0.0]: https://github.com/cabal-club/cabal-core/compare/v14.1.2...v15.0.0

[14.1.2]: https://github.com/cabal-club/cabal-core/compare/v14.1.1...v14.1.2

[14.1.1]: https://github.com/cabal-club/cabal-core/compare/v14.1.0...v14.1.1

[14.1.0]: https://github.com/cabal-club/cabal-core/compare/v14.0.0...v14.1.0

[14.0.0]: https://github.com/cabal-club/cabal-core/compare/v13.2.0...v14.0.0

[13.2.0]: https://github.com/cabal-club/cabal-core/compare/v13.1.0...v13.2.0

[13.1.0]: https://github.com/cabal-club/cabal-core/compare/v13.0.2...v13.1.0

[13.0.2]: https://github.com/cabal-club/cabal-core/compare/v13.0.1...v13.0.2

[13.0.1]: https://github.com/cabal-club/cabal-core/compare/v13.0.0...v13.0.1

[13.0.0]: https://github.com/cabal-club/cabal-core/compare/v12.0.1...v13.0.0

[12.0.1]: https://github.com/cabal-club/cabal-core/compare/v12.0.0...v12.0.1

[12.0.0]: https://github.com/cabal-club/cabal-core/compare/v11.2.1...v12.0.0

[11.2.1]: https://github.com/cabal-club/cabal-core/compare/v11.2.0...v11.2.1

[11.2.0]: https://github.com/cabal-club/cabal-core/compare/v11.1.0...v11.2.0

[11.1.1]: https://github.com/cabal-club/cabal-core/compare/v11.1.0...v11.1.1

[11.1.0]: https://github.com/cabal-club/cabal-core/compare/v11.0.2...v11.1.0

[11.0.2]: https://github.com/cabal-club/cabal-core/compare/v11.0.1...v11.0.2

[11.0.1]: https://github.com/cabal-club/cabal-core/compare/v11.0.0...v11.0.1

[11.0.0]: https://github.com/cabal-club/cabal-core/compare/v10.0.1...v11.0.0

[10.0.1]: https://github.com/cabal-club/cabal-core/compare/v10.0.0...v10.0.1

[10.0.0]: https://github.com/cabal-club/cabal-core/compare/v9.0.2...v10.0.0

[9.0.3]: https://github.com/cabal-club/cabal-core/compare/v9.0.2...v9.0.3

[9.0.2]: https://github.com/cabal-club/cabal-core/compare/v9.0.1...v9.0.2

[9.0.1]: https://github.com/cabal-club/cabal-core/compare/v9.0.0...v9.0.1

[9.0.0]: https://github.com/cabal-club/cabal-core/compare/v8.0.1...v9.0.0

[8.0.1]: https://github.com/cabal-club/cabal-core/compare/v8.0.0...v8.0.1

[8.0.0]: https://github.com/cabal-club/cabal-core/compare/v7.2.1...v8.0.0

[7.2.1]: https://github.com/cabal-club/cabal-core/compare/v7.2.0...v7.2.1

[7.2.0]: https://github.com/cabal-club/cabal-core/compare/v7.1.0...v7.2.0

[7.1.0]: https://github.com/cabal-club/cabal-core/compare/v7.0.1...v7.1.0

[7.0.1]: https://github.com/cabal-club/cabal-core/compare/v7.0.0...v7.0.1

[7.0.0]: https://github.com/cabal-club/cabal-core/compare/v6.0.2...v7.0.0

[6.0.2]: https://github.com/cabal-club/cabal-core/compare/v6.0.1...v6.0.2

[6.0.1]: https://github.com/cabal-club/cabal-core/compare/v6.0.0...v6.0.1

[6.0.0]: https://github.com/cabal-club/cabal-core/compare/v5.1.2...v6.0.0

[5.1.2]: https://github.com/cabal-club/cabal-core/compare/v5.1.1...v5.1.2

[5.1.1]: https://github.com/cabal-club/cabal-core/compare/v5.1.0...v5.1.1

[5.1.0]: https://github.com/cabal-club/cabal-core/compare/v5.0.1...v5.1.0

[5.0.1]: https://github.com/cabal-club/cabal-core/compare/v5.0.0...v5.0.1

[5.0.0]: https://github.com/cabal-club/cabal-core/compare/v4.0.1...v5.0.0

[4.0.1]: https://github.com/cabal-club/cabal-core/compare/v4.0.0...v4.0.1

[4.0.0]: https://github.com/cabal-club/cabal-core/compare/v3.0.4...v4.0.0

[3.0.4]: https://github.com/cabal-club/cabal-core/compare/v3.0.3...v3.0.4

[3.0.3]: https://github.com/cabal-club/cabal-core/compare/v3.0.2...v3.0.3

[3.0.2]: https://github.com/cabal-club/cabal-core/compare/v2.3.0...v3.0.2

[2.3.0]: https://github.com/cabal-club/cabal-core/compare/v2.2.0...v2.3.0

[2.2.0]: https://github.com/cabal-club/cabal-core/compare/v2.1.1...v2.2.0

[2.1.1]: https://github.com/cabal-club/cabal-core/compare/v2.1.0...v2.1.1

[2.1.0]: https://github.com/cabal-club/cabal-core/compare/v2.0.1...v2.1.0

[2.0.1]: https://github.com/cabal-club/cabal-core/compare/v2.0.0...v2.0.1

[2.0.0]: https://github.com/cabal-club/cabal-core/compare/v1.0.0...v2.0.0

[1.0.0]: https://github.com/cabal-club/cabal-core/releases/tag/v1.0.0
