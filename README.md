# Vehicle Registration Token (VRT) - Core

Core infrastructure for Vehicle Registration Token Project, a protocol for trace vehicle's property and their history in Ethereum blockchain.

## Prerequisites:

-   [Docker](https://www.docker.com/get-started/)
-   [NodeJS](https://nodejs.org/it/)
-   [Truffle](https://trufflesuite.com/)
-   [graph-cli](https://thegraph.com/en/)

## Local deployment

### Install Truffle

`npm install -g truffle`

### Install graph-cli

`npm install -g @graphprotocol/graph-cli`

### Clone repository and install dependencies

```
git clone https://github.com/1M4nt0/vrt-core

cd vrt-core

npm install
```

### Start docker containers

```
cd vrt-core/docker

docker compose up
```

### Generate contracts abis

```
truffle compile

npm run build-contract-abi
```

### Migrate contracts to Ganache

```
truffle migrate
```

### Deploy The Graph subgraph

```
npm run codegen

npm run create-local-graph

npm run deploy-local-graph
```

## Interface

Check [Vehicle Registration Token (VRT) - Interface](https://github.com/1M4nt0/vrt-interface)
