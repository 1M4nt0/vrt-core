# Instructions

## Endpoints HTTP

Graph: http://127.0.0.1:8000/subgraphs/name/example/graphql

IPFS: http://localhost:5001/

## Launch application

### Start Dev Server

1. Run docker (docker compose up)
2. npm run dev

### Gen Dev Files

1. npm run build-contract-abi (solo se modificati i contratti)
2. npm run genContractType (solo se modificati i contratti)

### Migrate contracts to ganache

1. truffle migrate

### Create new subgraph

1. npm run codegen (solo se modificato schema.graphql)
2. npm run create-local
3. npm run deploy-local
