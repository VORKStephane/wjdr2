
const materials = {
    leather : {
        label: "wjdr2.label.armor.leather",
        category : "light",
        localProtection : 1,
        globalProtection : 1
    },
    studdedLeather : {
        label : "wjdr2.label.armor.studdedLeather",
        category : "light",
        localProtection : 1,
        globalProtection : 2
    },
    chain : {
        label : "wjdr2.label.armor.chain",
        category : "medium",
        localProtection : 2,
        globalProtection : 3
    },
    scale : {
        label : "wjdr2.label.armor.scale",
        category : "medium",
        localProtection : 3,
        globalProtection : 4
    },
    plate : {
        label : "wjdr2.label.armor.plate",
        category : "heavy",
        localProtection : 2,
        globalProtection : 5
    },
    ithilmar : {
        label : "wjdr2.label.armor.ithilmar",
        category : "heavy",
        localProtection : 3,
        globalProtection : 4
    },
    gromril : {
        label : "wjdr2.label.armor.gromril",
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
    let toReturn = [];
    for (let material in materials) {
        toReturn.push([material, materials[material].label]);
    }
    return Object.fromEntries(new Map(toReturn));
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
