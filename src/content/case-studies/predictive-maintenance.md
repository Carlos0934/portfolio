---
title: "Hotel quotes that stay in sync with live inventory"
slug: "hotel-connectivity-quote-performance"
summary: "Quoting depended on many hotel providers with different behaviors and latency. I built and hardened the provider connections and cached exchange rates and promotions, so the quoting engine gets fresh rates and availability while hitting the database less."
tags:
  - Provider Integration
  - Quote Performance
  - Data Reliability
  - Operational Efficiency
client: "PriceTravel Holding"
sector: "Travel-tech"
stack: "AWS DAX · Background workers · Hotel provider APIs"
order: 2
url: "https://pricetravel.com"
---

## Context

Travel quoting and connectivity flows depended on multiple third-party providers with different behaviors, latency profiles, and data constraints.

## Implementation

Implemented provider integrations for SiteMinder (SiteConnect), TravelClick, Omnibees, Gin RateFox, and TravelGate HotelX, while also supporting Hotelbeds, DerbySoft, SynXis, and Expedia Rapid API. Added a DAX-backed exchange-rate materialized view and a promotions materialized view powered by background workers to reduce quote-time data access overhead.

## Results

- Real-time rate and availability synchronization across multiple hotel providers
- Lower quote-service query load through cached exchange-rate and promotions paths
- Improved API consistency and operational reliability for provider integrations
