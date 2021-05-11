export default class WjdrActorSheet extends ActorSheet {
    get template() {
        return `./systems/wjdr2/templates/sheets/actors/${this.actor.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.wjdr2;

        console.log(Object.entries(data.actor.data.attributes.rollable));

        for ( let [a, attribute] of Object.entries(data.actor.data.attributes.rollable)) {
            attribute.label = CONFIG.wjdr2.rollableCharacteristic[a];
        }

        return data;
    }
}