export const prepareConfiguration = function(objs, prefix) {
    let toReturn = [];
    for (let obj in objs) {
        let label = obj == 'none' ? "-" : prefix + obj;
        toReturn.push([obj, label]);
    }
    return Object.fromEntries(new Map(toReturn));
}