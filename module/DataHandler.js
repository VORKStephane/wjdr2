export const prepareConfiguration = function(objs, prefix) {
    let toReturn = [];
    for (let obj in objs) {
        let label = obj == 'none' ? "-" : prefix + obj;
        toReturn.push([obj, label]);
    }
    return Object.fromEntries(new Map(toReturn));
}

export const prepareConfigurationFromArray = function (array, prefix) {
    let toReturn = [];
    for (let index=0; index<array.length; ++index) {
        toReturn.push([array[index], prefix + array[index]]);
    }
    return Object.fromEntries(new Map(toReturn));
}