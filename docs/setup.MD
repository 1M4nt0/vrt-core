# load app

1 - Run docker (docker compose up)
2 - npm run dev

# create new subgraph

1 - codegen
2 - npm run create-local
3 - npm run deploy-local

# access contracts and create tokens

1 - truffle console
2 - const VRT = await VehicleRegistrationToken.deployed();
3 - VRT.mintToken("http://localhost:5001/{cid}", {from:accounts[0]});

# Endpoint HTTP

Graph: http://127.0.0.1:8000/subgraphs/name/example/graphql
IPFS: http://localhost:5001/
