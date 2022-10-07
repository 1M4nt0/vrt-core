// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Cancel extends ethereum.Event {
  get params(): Cancel__Params {
    return new Cancel__Params(this);
  }
}

export class Cancel__Params {
  _event: Cancel;

  constructor(event: Cancel) {
    this._event = event;
  }

  get ticketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get vehicleId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OnSale extends ethereum.Event {
  get params(): OnSale__Params {
    return new OnSale__Params(this);
  }
}

export class OnSale__Params {
  _event: OnSale;

  constructor(event: OnSale) {
    this._event = event;
  }

  get ticketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenContract(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get vehicleId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Sold extends ethereum.Event {
  get params(): Sold__Params {
    return new Sold__Params(this);
  }
}

export class Sold__Params {
  _event: Sold;

  constructor(event: Sold) {
    this._event = event;
  }

  get ticketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenContract(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get vehicleId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class VehicleMarket__getVehicleSaleTicketResultValue0Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get tokenContract(): Address {
    return this[1].toAddress();
  }

  get vehicleId(): BigInt {
    return this[2].toBigInt();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get status(): i32 {
    return this[4].toI32();
  }
}

export class VehicleMarket extends ethereum.SmartContract {
  static bind(address: Address): VehicleMarket {
    return new VehicleMarket("VehicleMarket", address);
  }

  getVehicleSaleTicket(
    vehicleId: BigInt
  ): VehicleMarket__getVehicleSaleTicketResultValue0Struct {
    let result = super.call(
      "getVehicleSaleTicket",
      "getVehicleSaleTicket(uint256):((address,address,uint256,uint256,uint8))",
      [ethereum.Value.fromUnsignedBigInt(vehicleId)]
    );

    return changetype<VehicleMarket__getVehicleSaleTicketResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getVehicleSaleTicket(
    vehicleId: BigInt
  ): ethereum.CallResult<
    VehicleMarket__getVehicleSaleTicketResultValue0Struct
  > {
    let result = super.tryCall(
      "getVehicleSaleTicket",
      "getVehicleSaleTicket(uint256):((address,address,uint256,uint256,uint8))",
      [ethereum.Value.fromUnsignedBigInt(vehicleId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<VehicleMarket__getVehicleSaleTicketResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  isVehicleOnSale(vehicleId: BigInt): boolean {
    let result = super.call(
      "isVehicleOnSale",
      "isVehicleOnSale(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(vehicleId)]
    );

    return result[0].toBoolean();
  }

  try_isVehicleOnSale(vehicleId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isVehicleOnSale",
      "isVehicleOnSale(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(vehicleId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  listedItemsCount(): BigInt {
    let result = super.call(
      "listedItemsCount",
      "listedItemsCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_listedItemsCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "listedItemsCount",
      "listedItemsCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get VRTAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyVehicleCall extends ethereum.Call {
  get inputs(): BuyVehicleCall__Inputs {
    return new BuyVehicleCall__Inputs(this);
  }

  get outputs(): BuyVehicleCall__Outputs {
    return new BuyVehicleCall__Outputs(this);
  }
}

export class BuyVehicleCall__Inputs {
  _call: BuyVehicleCall;

  constructor(call: BuyVehicleCall) {
    this._call = call;
  }

  get vehicleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyVehicleCall__Outputs {
  _call: BuyVehicleCall;

  constructor(call: BuyVehicleCall) {
    this._call = call;
  }
}

export class CancelSaleCall extends ethereum.Call {
  get inputs(): CancelSaleCall__Inputs {
    return new CancelSaleCall__Inputs(this);
  }

  get outputs(): CancelSaleCall__Outputs {
    return new CancelSaleCall__Outputs(this);
  }
}

export class CancelSaleCall__Inputs {
  _call: CancelSaleCall;

  constructor(call: CancelSaleCall) {
    this._call = call;
  }

  get vehicleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelSaleCall__Outputs {
  _call: CancelSaleCall;

  constructor(call: CancelSaleCall) {
    this._call = call;
  }
}

export class PutVehicleOnSaleCall extends ethereum.Call {
  get inputs(): PutVehicleOnSaleCall__Inputs {
    return new PutVehicleOnSaleCall__Inputs(this);
  }

  get outputs(): PutVehicleOnSaleCall__Outputs {
    return new PutVehicleOnSaleCall__Outputs(this);
  }
}

export class PutVehicleOnSaleCall__Inputs {
  _call: PutVehicleOnSaleCall;

  constructor(call: PutVehicleOnSaleCall) {
    this._call = call;
  }

  get vehicleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PutVehicleOnSaleCall__Outputs {
  _call: PutVehicleOnSaleCall;

  constructor(call: PutVehicleOnSaleCall) {
    this._call = call;
  }
}