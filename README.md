# Vehicle Registration Token (VRT) - Core

Core infrastructure for Vehicle Registration Token Project, a protocol for trace vehicle's property and their history in Ethereum blockchain.

## Prerequisites:

-   Docker
-   Truffle
-   graph-cli

## Local deployment

### Clone repository

1. `clone this repository`
2. `cd vrt-project-core`
3. `npm install`

### Start docker containers

2. `cd vrt-project-core/docker`
3. `docker compose up`

### Generate contracts abis

1. `truffle compile`
2. `npm run build-contract-abi`

### Migrate contracts to Ganache

1. `truffle migrate`

### Deploy The Graph subgraph

1. `npm run codegen`
2. `npm run create-local-graph`
3. `npm run deploy-local-graph`

## Interface

Check [Vehicle Registration Token (VRT) - Interface](https://github.com/1M4nt0/tesi-uniud-2022-interface)
