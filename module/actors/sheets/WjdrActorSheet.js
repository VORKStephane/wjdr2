export default class WjdrActorSheet extends ActorSheet {
    get template() {
        return `./systems/wjdr2/templates/actors/${this.actor.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.wjdr2;

        var rollableCharacteristic = data.actor.data.data.attributes.rollable;

        for ( let [a, attribute] of Object.entries(rollableCharacteristic)) {
            attribute.label = CONFIG.wjdr2.rollableCharacteristic[a];
        }

        return data;
    }
}