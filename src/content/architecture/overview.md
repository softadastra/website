# Softadastra Architecture Overview

This document provides a high-level architectural view of Softadastra.

It explains how the different layers of the system interact and why the architecture is designed around **resilience, locality, and synchronization** rather than traditional request–response assumptions.

```cpp
#include <string>

#include <vix.hpp>
#include <vix/middleware/app/adapter.hpp>
#include <vix/middleware/performance/compression.hpp>

using namespace vix;

int main()
{
    App app;

    // Create a compression middleware (gzip / br)
    auto compression_mw = vix::middleware::app::adapt_ctx(
        vix::middleware::performance::compression({
            .min_size = 8,     // compress only responses >= 8 bytes
            .add_vary = true,  // add "Vary: Accept-Encoding"
            .enabled = true,   // enable middleware
        })
    );

    // Apply compression globally
    app.use(std::move(compression_mw));

    // Home route
    app.get("/", [](Request &, Response &res){
        res.send("Compression enabled. Try /x with Accept-Encoding.");
    });

    // Large response → compression will apply
    app.get("/x", [](Request &, Response &res){
        res.status(200).send(std::string(20, 'a'));
    });

    // Small response → no compression
    app.get("/small", [](Request &, Response &res){
        res.status(200).send("aaaa"); // 4 bytes
    });

    // Start HTTP server
    app.run(8080);
    return 0;
}

```

---

## Architectural center of gravity

Softadastra is not organized around servers or APIs.

Its center of gravity is the **synchronization engine**.

All components — runtime, networking, edge nodes, and optional cloud services — exist to support reliable local execution and durable synchronization.

---

## High-level layers

Softadastra is composed of five conceptual layers:

1. Client Runtime
2. Sync Engine
3. Transport & Networking
4. Edge Layer
5. Optional Cloud Services

Each layer is independently useful and replaceable, but together they form a coherent system.

---

## 1. Client Runtime

The Client Runtime is responsible for local execution.

Key responsibilities:

- Execute application logic locally
- Accept and persist all writes immediately
- Maintain local state and local databases
- Expose APIs to the sync engine

The runtime must remain fully operational without network access.

---

## 2. Sync Engine (Core)

The Sync Engine is the heart of Softadastra.

It ensures that all state transitions are:

- recorded durably
- replayable
- synchronizable

Core components:

- Write-Ahead Log (WAL)
- Outbox queue
- Retry and backoff policies
- Conflict detection and resolution
- Snapshotting and state reconstruction

The sync engine operates independently of transport.

---

## 3. Transport & Networking

The transport layer is responsible for exchanging synchronization data.

Characteristics:

- Secure by default
- Peer-to-peer capable
- Resilient to partial connectivity

Responsibilities:

- Peer discovery
- Secure channel establishment
- Message routing and relay
- Delivery acknowledgments

The transport layer never defines application semantics — it only moves operations.

---

## 4. Edge Layer

Edge nodes provide proximity and resilience.

They are not authoritative servers, but supporting infrastructure.

Responsibilities:

- Caching frequently accessed data
- Store-and-forward for disconnected nodes
- Relaying synchronization messages
- Optional lightweight computation

Edge nodes reduce latency and improve reach without centralization.

---

## 5. Optional Cloud Services

Cloud services are optional enhancements.

They may provide:

- long-term durability
- global indexing
- coordination services
- analytics and observability

The system must continue to function correctly if all cloud services are unavailable.

---

## Data flow summary

1. User action is executed locally
2. State change is written to WAL
3. Operation enters the outbox
4. Transport layer attempts delivery
5. Edge or peers receive and acknowledge
6. Conflicts are resolved if necessary

At no point does the user depend on immediate network success.

---

## Architectural guarantees

Softadastra aims to guarantee:

- no data loss under normal operation
- recovery after crashes or long disconnections
- predictable behavior under failure
- gradual convergence of state

---

## Summary

Softadastra replaces request–response assumptions with **state, durability, and synchronization**.

This architecture enables applications to remain usable, correct, and recoverable regardless of network conditions.
