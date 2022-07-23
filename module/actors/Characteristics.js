import { prepareConfigurationFromArray } from "../DataHandler.js";

const PREFIX = "wjdr2.actors.characteristics.";

const rollableCharacteristics = ["ws", "bs", "s", "t", "ag", "int", "wp", "fel"];
const nonRollableNonUpgradableCharacteristic = ["sb", "tb", "m", "ip", "fp"];
const nonRollableCharacteristic = ["a", "w", "mag"];

export const prepareRollableCharacteristicsConfiguration = function() {
    return prepareConfigurationFromArray(rollableCharacteristics, PREFIX);
}

export const prepareNonRollableNonUpgradableCharacteristicsConfiguration = function() {
    return prepareConfigurationFromArray(nonRollableNonUpgradableCharacteristic, PREFIX);
}

export const prepareNonRollableCharacteristicsConfiguration = function() {
    return prepareConfigurationFromArray(nonRollableCharacteristic, PREFIX);
}