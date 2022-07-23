import { prepareConfigurationFromArray } from "../DataHandler.js";

const rollableCharacteristics = ["ws", "bs", "s", "t", "ag", "int", "wp", "fel"];

export const prepareRollableCharacteristicsConfiguration = function() {
    return prepareConfigurationFromArray(rollableCharacteristics, "wjdr2.actors.characteristics.");
}