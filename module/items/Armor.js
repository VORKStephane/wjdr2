import { prepareConfiguration, prepareConfigurationFromArray } from "../DataHandler.js";

const zone = ["entireBody", "head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"];

export const prepareArmorZoneConfiguration = function() {
    return prepareConfigurationFromArray(zone, "wjdr2.actors.damageLocation.");
}

const materials = {
    leather : {
        category : "light",
        localProtection : 1,
        globalProtection : 1
    },
    studdedLeather : {
        category : "light",
        localProtection : 1,
        globalProtection : 2
    },
    chain : {
        category : "medium",
        localProtection : 2,
        globalProtection : 3
    },
    scale : {
        category : "medium",
        localProtection : 3,
        globalProtection : 4
    },
    plate : {
        category : "heavy",
        localProtection : 2,
        globalProtection : 5
    },
    ithilmar : {
        category : "heavy",
        localProtection : 3,
        globalProtection : 4
    },
    gromril : {
        category : "heavy",
        localProtection : 3,
        globalProtection : 6
    }
};

function getArmorCategoryBasedOnMaterial(material) {
    let armor = materials[material];
    if (typeof armor == 'undefined') return "undefined";
    return armor.category;
}

function getLocalProtectionBasedOnMaterial(material) {
    let armor = materials[material];
    if (typeof armor == 'undefined') return -1;
    return armor.localProtection;
}

function getGlobalProtectionBasedOnMaterial(material) {
    let armor = materials[material];
    if (typeof armor == 'undefined') return -1;
    return armor.globalProtection;
}

export const prepareArmorConfiguration = function() {
    return prepareConfiguration(materials, "wjdr2.label.armor.");
}
    
export class Armor {
    constructor(material, global) {
        this.material = material;
        this.category = getArmorCategoryBasedOnMaterial(material);
        this.protection = global ?
            getGlobalProtectionBasedOnMaterial(material):
            getLocalProtectionBasedOnMaterial(material);
    }

    getCategory() {
        return this.category;
    }

    getCategoryLabel() {
        return "wjdr2.label.armor." + this.category;
    }

    getProtection() {
        return this.protection;
    }

    getMaterial() {
        return this.material;
    }
}
