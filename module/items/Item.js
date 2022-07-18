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

export const prepareAvailabilityConfiguration = function() {
    return prepareConfiguration(availability, "wjdr2.items.availability.");
}