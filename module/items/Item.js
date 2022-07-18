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
    let toReturn = [];
    for (let av in availability) {
        let label = av == 'none' ?
            "-" : "wjdr2.items.availability." + av;

        toReturn.push([av, label]);
    }
    return Object.fromEntries(new Map(toReturn));
}