const VehicleMarketplace = artifacts.require("VehicleMarketplace");
const VehicleRegistrationToken = artifacts.require("VehicleRegistrationToken");
const { writeFileSync } = require("fs");

module.exports = async function(deployer) {
    await deployer.deploy(VehicleRegistrationToken);
    await deployer.deploy(VehicleMarketplace, VehicleRegistrationToken.address);
    VehicleRegistrationToken.deployed().then((instance) => {
        instance.setMarketplaceAddress(VehicleMarketplace.address);
    });

    writeFileSync(
        "deploy.json",
        JSON.stringify({
                VehicleRegistrationToken: VehicleRegistrationToken.address,
                VehicleMarketplace: VehicleMarketplace.address,
            },
            null,
            2
        )
    );

    console.log("\nAddresses:\n=========");
    console.log(
        `> VehicleRegistrationToken:       ${VehicleRegistrationToken.address}\n> VehicleMarketplace: ${VehicleMarketplace.address}\n`
    );
};