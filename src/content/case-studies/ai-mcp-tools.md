---
title: "Live results from 128 sources, in real time"
slug: "real-time-streaming-api"
summary: "A concurrent collector and streaming API that sends one clean event per change."
tags:
  - Real-Time Data
  - Event Streaming
  - Data Normalization
  - Live Monitoring
client: "RoulettesView.com"
sector: "Real-time data"
stack: "Go · WebSockets"
order: 4
url: "https://roulettesview.com"
---

## Context

The product required a live-data backend capable of collecting fast-changing table results and pushing clean updates to connected clients without duplicates.

## Implementation

Built a real-time API in Go backed by goroutine-based workers and a Chrome-driven scraper that monitored 128 roulette tables. Added normalization and deduplication logic before broadcasting updates via WebSockets so consumers could react to a clean event stream.

## Results

- Continuous live tracking across 128 active tables
- Deduplicated event delivery for downstream consumers
- Low-latency real-time updates over persistent WebSocket connections
