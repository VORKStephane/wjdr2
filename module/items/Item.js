import { prepareConfiguration } from "../DataHandler.js";

export const availability = {
    veryRare : {
        modifier : -30
    }, 
    rare : {
        modifier : -20
    },
    scarce : {
        modifier : -10
    },
    average : {
        modifier : +0
    },
    common : {
        modifier : +10
    },
    plentiful : {
        modifier : +20
    },
    abundant : {
        modifier : +30
    },
    none : {}
}

const coinage = {
    goldCrown : "gc",
    silverShilling : "s",
    brassPenny : "p"
}

export const prepareAvailabilityConfiguration = function() {
    return prepareConfiguration(availability, "wjdr2.items.availability.");
}

export class Item {
    constructor(availability, encumbrance, cost) {
        this.availability = availability;
        this.encumbrance = encumbrance;
        this.cost = cost == 0 ? 0 : {
            gc : typeof cost.gc != 'undefined' ? cost.gc : 0,
            s : typeof cost.s != 'undefined' ? cost.s : 0,
            p : typeof cost.p != 'undefined' ? cost.p : 0
        }
    }

    getCost() {
        return this.cost;
    }

    getAvailability() {
        console.log(this.availability);
        return availability[this.availability];
    }

    getEncumbrance() {
        return this.encumbrance;
    }
}