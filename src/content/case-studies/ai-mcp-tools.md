---
title: "Real-Time Streaming API"
slug: "real-time-streaming-api"
summary: "Created a Go-based real-time API and Chrome-powered scraper that tracked 128 roulette tables and emitted deduplicated live results over WebSockets."
tags:
  - Real-Time Data
  - Event Streaming
  - Data Normalization
  - Live Monitoring
order: 4
---

## Context

The product required a live-data backend capable of collecting fast-changing table results and pushing clean updates to connected clients without duplicates.

## Implementation

Built a real-time API in Go backed by goroutine-based workers and a Chrome-driven scraper that monitored 128 roulette tables. Added normalization and deduplication logic before broadcasting updates via WebSockets so consumers could react to a clean event stream.

## Results

- Continuous live tracking across 128 active tables
- Deduplicated event delivery for downstream consumers
- Low-latency real-time updates over persistent WebSocket connections
