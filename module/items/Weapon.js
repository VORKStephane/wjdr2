import { prepareConfiguration } from "../DataHandler.js";
import { availability } from "./Item.js"

const weaponGroups = {
    ordinary : { requireTalent : false },
    cavalry : { requireTalent : true },
    crossbow : { requireTalent : true },
    engineer : { requireTalent : true },
    entangling : { requireTalent : true },
    fencing : { requireTalent : true },
    flail : { requireTalent : true },
    gunpowder : { requireTalent : true },
    longbow : { requireTalent : true },
    parrying : { requireTalent : true },
    sling : { requireTalent : true },
    throwing : { requireTalent : true },
    twoHanded : { requireTalent : true },
    none : { requireTalent : false }
}

export const prepareWeaponGroupConfiguration = function() {
    return prepareConfiguration(weaponGroups, "wjdr2.items.weapon.wGroup.");
}

const weaponQualities = {
    armourPiercing : {
        effects : []
    },
    balanced : {
        effects : []
    },
    defensive : {
        effects : []
    },
    experimental : {
        effects : []
    },
    fast : {
        effects : []
    },
    impact : {
        effects : []
    },
    precise : {
        effects : []
    },
    pummelling : {
        effects : []
    },
    shrapnel : {
        effects : []
    },
    slow : {
        effects : []
    },
    snare : {
        effects : []
    },
    special : {
        effects : []
    },
    tiring : {
        effects : []
    },
    unreliable : {
        effects : []
    }
}

export const prepareWeaponQualitiesConfiguration = function() {
    return prepareConfiguration(weaponQualities, "wjdr2.items.weapon.wQualities.");
}

const meleeWeapons = {
    buckler : {
        cost : {
            gc : 2
        },
        encumbrance : 10,
        weaponGroup : weaponGroups.parrying,
        damage:"SB-4",
        qualities:[weaponQualities.balanced, weaponQualities.defensive, weaponQualities.pummelling],
        availability : availability.average
    },
    dagger : {
        cost : {
            gc : 1
        },
        encumbrance : 10,
        weaponGroup : weaponGroups.ordinary,
        damage:"SB-3",
        qualities:[],
        availability : availability.common
    },
    demiLance : {
        cost : {
            gc : 20
        },
        encumbrance : 75,
        weaponGroup : weaponGroups.cavalry,
        damage:"SB",
        qualities:[weaponQualities.fast, weaponQualities.impact, weaponQualities.tiring],
        availability : availability.scarce
    },
    flail : {
        cost : {
            gc : 15
        },
        encumbrance : 95,
        weaponGroup : weaponGroups.flail,
        damage:"SB+1",
        qualities:[weaponQualities.impact, weaponQualities.tiring],
        availability : availability.scarce
    },
    foil : {
        cost : {
            gc : 18
        },
        encumbrance : 40,
        weaponGroup : weaponGroups.fencing,
        damage:"SB-2",
        qualities:[weaponQualities.fast, weaponQualities.precise],
        availability : availability.rare
    },
    gauntlet : {
        cost : {
            gc : 1
        },
        encumbrance : 1,
        weaponGroup : weaponGroups.ordinary,
        damage:"SB-3",
        qualities:[weaponQualities.pummelling],
        availability : availability.common
    },
    knuckleDuster : {
        cost : {
            gc : 1
        },
        encumbrance : 1,
        weaponGroup : weaponGroups.ordinary,
        damage:"SB-3",
        qualities:[weaponQualities.pummelling],
        availability : availability.common
    },
    greatWeapon : {
        cost : {
            gc : 20
        },
        encumbrance : 200,
        weaponGroup : weaponGroups.twoHanded,
        damage:"SB",
        qualities:[weaponQualities.impact, weaponQualities.slow],
        availability : availability.average
    },
    halberd : {
        cost : {
            gc : 15
        },
        encumbrance : 175,
        weaponGroup : weaponGroups.twoHanded,
        damage:"SB",
        qualities:[weaponQualities.special],
        availability : availability.common
    },
    handWeapon : {
        cost : {
            gc : 10
        },
        encumbrance : 50,
        weaponGroup : weaponGroups.ordinary,
        damage:"SB",
        qualities:[],
        availability : availability.common
    },
    improvised : {
        cost : 0,
        encumbrance : 35,
        weaponGroup : weaponGroups.ordinary,
        damage:"SB-4",
        qualities:[],
        availability : ""
    },
    lance : {
        cost : {
            gc : 15
        },
        encumbrance : 100,
        weaponGroup : weaponGroups.cavalry,
        damage:"SB+1",
        qualities:[weaponQualities.fast, weaponQualities.impact, weaponQualities.tiring],
        availability : availability.rare
    },
    mainGauche : {
        cost : {
            gc : 4
        },
        encumbrance : 15,
        weaponGroup : weaponGroups.parrying,
        damage:"SB-3",
        qualities:[weaponQualities.balanced, weaponQualities.defensive],
        availability : availability.scarce
    },
    morningStar : {
        cost : {
            gc : 15
        },
        encumbrance : 60,
        weaponGroup : weaponGroups.flail,
        damage:"SB",
        qualities:[weaponQualities.impact, weaponQualities.tiring],
        availability : availability.scarce
    },
    quarterStaff : {
        cost : {
            s : 3
        },
        encumbrance : 50,
        weaponGroup : weaponGroups.ordinary,
        damage:"SB-2",
        qualities:[weaponQualities.defensive, weaponQualities.pummelling],
        availability : availability.plentiful
    },
    rapier : {
        cost : {
            gc : 18
        },
        encumbrance : 40,
        weaponGroup : weaponGroups.fencing,
        damage:"SB-1",
        qualities:[weaponQualities.fast],
        availability : availability.scarce
    },
    shield : {
        cost : {
            gc : 10
        },
        encumbrance : 50,
        weaponGroup : weaponGroups.ordinary,
        damage:"SB-2",
        qualities:[weaponQualities.defensive, weaponQualities.special],
        availability : availability.common
    },
    spear : {
        cost : {
            gc : 10
        },
        encumbrance : 50,
        weaponGroup : weaponGroups.ordinary,
        damage:"SB",
        qualities:[weaponQualities.fast],
        availability : availability.common
    },
    swordBreaker : {
        cost : {
            gc : 5
        },
        encumbrance : 40,
        weaponGroup : weaponGroups.parrying,
        damage:"SB-3",
        qualities:[weaponQualities.balanced, weaponQualities.special],
        availability : availability.scarce
    },
    unarmed : {
        cost : 0,
        encumbrance : 0,
        weaponGroup : weaponGroups.ordinary,
        damage:"SB-4",
        qualities:[weaponQualities.special],
        availability : availability.common
    }
}

// export class Weapon {

// }