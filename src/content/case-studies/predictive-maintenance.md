---
title: "Hotel Connectivity & Quote Performance"
slug: "hotel-connectivity-quote-performance"
summary: "Built hotel provider integrations and DAX-backed data paths that improved synchronization, quote responsiveness, and API consistency across travel inventory systems."
tags:
  - .NET
  - DAX
  - Travel APIs
  - Background Workers
order: 1
---

## Context

Travel quoting and connectivity flows depended on multiple third-party providers with different behaviors, latency profiles, and data constraints.

## Implementation

Implemented provider integrations for SiteMinder (SiteConnect), TravelClick, Omnibees, Gin RateFox, and TravelGate HotelX, while also supporting Hotelbeds, DerbySoft, SynXis, and Expedia Rapid API. Added a DAX-backed exchange-rate materialized view and a promotions materialized view powered by background workers to reduce quote-time data access overhead.

## Results

- Real-time rate and availability synchronization across multiple hotel providers
- Lower quote-service query load through cached exchange-rate and promotions paths
- Improved API consistency and operational reliability for provider integrations
