# Softadastra Runtime API — v1 (Minimal Specification)

**Softadastra** is the *Sync OS of the real Internet*.

This document defines the **minimal public runtime API** that applications and enterprises embed to obtain:

- Local writes always accepted
- Durable intent (WAL)
- Safe convergence under unreliable networks
- Transport-agnostic synchronization
- Explicit conflict handling
- Cloud optional for correctness

This is **not an internal design**.
This is the **contract surface** exposed to integrators.

---

## 1. Core Concepts

| Concept | Description |
|------|------------|
| Runtime | Embedded Softadastra instance |
| Collection | Logical data namespace (e.g. `orders`, `notes`) |
| Doc | Document / record identified by `docId` |
| Op | Durable operation appended to WAL |
| WAL | Write-Ahead Log (source of durability) |
| Peer | Sync endpoint (edge, cloud, device, P2P) |
| SyncSession | Push / pull session with a peer |
| Conflict | Divergence requiring resolution |

---

## 2. Runtime Lifecycle

### `Runtime.open(config) -> Runtime`

Initializes local storage and WAL.

**Config**
- `storage_path` (required)
- `encryption` (optional)
- `clock` (optional)
- `limits` (optional)

### `runtime.identity() -> Identity`

Returns stable identity:
- `deviceId`
- `instanceId`
- `actorId`

### `runtime.close()`

Flushes WAL and shuts down cleanly.

---

## 3. Local Writes (Always Accepted)

Local writes **must never fail due to network state**.

### `runtime.begin() -> Tx`

Starts a local transaction (optional but recommended).

### `tx.put(collection, docId, value, options?) -> OpId`

Creates or replaces a document.

### `tx.patch(collection, docId, patch, options?) -> OpId`

Partial update (merge / JSON patch).

### `tx.del(collection, docId, options?) -> OpId`

Deletes a document (tombstone).

### `tx.commit() -> CommitResult`

Guarantees operations are durably written to WAL.

**Invariant**
> If `commit()` succeeds, the write is never lost — even on crash.

---

## 4. Local Reads (Source of Truth)

### `runtime.get(collection, docId) -> Doc | null`

Returns the local authoritative state.

### `runtime.query(collection, filter?, sort?, limit?, cursor?) -> Page<Doc>`

Local query with pagination.

### `runtime.watch(collection, docId | query, callback) -> Subscription`

Subscribes to local state changes.

---

## 5. WAL & Durability

### `runtime.wal.status() -> WalStatus`

- WAL size
- lastOpId
- backlog
- checkpoints

### `runtime.wal.export(sinceOpId) -> OpBatch`

Exports operations for debugging, migration, or support.

### `runtime.wal.compact(policy?) -> CompactResult`

Compaction without breaking durability guarantees.

---

## 6. Synchronization (Transport-Agnostic)

### `runtime.sync.connect(peerUri, options?) -> Peer`

Creates a logical peer.

**Examples**
- `edge://region-01`
- `https://sync.company.com`
- `p2p://<peerId>`

### `runtime.sync.start(peer, mode?, options?) -> SyncSession`

Modes:
- `push`
- `pull`
- `bidirectional`

### `session.status() -> SyncStatus`

- backlog
- lastAck
- bytes sent / received
- errors
- convergence progress

### `session.stop()`

Stops the session cleanly.

### `runtime.sync.once(peer, options?) -> SyncResult`

One-shot synchronization (recommended for simple apps).

---

## 7. Conflict Handling (Explicit)

Conflicts are **never silent**.

### `runtime.conflicts.list(collection?, docId?) -> List<Conflict>`

Lists unresolved conflicts.

### `runtime.conflicts.get(conflictId) -> ConflictDetail`

Returns:
- local version
- remote version
- actors
- logical timestamps

### `runtime.conflicts.resolve(conflictId, resolution) -> OpId`

Resolution strategies:
- `accept_local`
- `accept_remote`
- `merge(value)`
- `custom(resolverFnId)` (optional)

---

## 8. Events & Observability

### `runtime.events.subscribe(handler) -> Subscription`

Emits structured events:
- `wal_append`
- `sync_started`
- `sync_progress`
- `sync_error`
- `sync_done`
- `conflict_detected`
- `conflict_resolved`
- `transport_up / transport_down`

### `runtime.health() -> HealthReport`

Returns:
- storage health
- WAL backlog
- sync state
- peer reachability

---

## 9. Ultra-Minimal Surface (v0)

For constrained environments:

- `open / close`
- `put / del / get / query`
- `sync.once(peer)`
- `conflicts.list / resolve`
- `events.subscribe`

---

## 10. Contractual Guarantees

The runtime **must guarantee**:

1. Local writes are always accepted
2. Commit implies durability (WAL)
3. Local reads are authoritative
4. Sync is asynchronous and resumable
5. Operations are idempotent
6. Conflicts are explicit and resolvable
7. Transport is fully interchangeable

---

## 11. One-Sentence Definition

> **Softadastra Runtime is an offline-first synchronization foundation that guarantees durable local writes and safe convergence under unreliable networks, with cloud being optional for correctness.**

---

**Status**: Draft v1
**Audience**: Enterprises, platform partners, runtime integrators
**Scope**: Public API contract (not internal design)
