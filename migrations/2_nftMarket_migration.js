const VehicleMarket = artifacts.require("VehicleMarketplace");
const VehicleRegistration = artifacts.require("VehicleRegistrationToken");

module.exports = async function(deployer) {
    await deployer.deploy(VehicleRegistration);
    await deployer.deploy(VehicleMarket, VehicleRegistration.address);
    VehicleRegistration.deployed().then((instance) => {
        instance.setMarketplaceAddress(VehicleMarket.address);
    });
};