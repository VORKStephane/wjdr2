export default class WjdrActorSheet extends ActorSheet {
    get template() {
        return `./systems/wjdr2/templates/actors/${this.actor.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.wjdr2;

        this.setAttributesLabel(data);        

        return data;
    }

    /**
     * Set the attributes' label to properly display them in the UI
     * @param {Object} data represents the sheet's data 
     */
    setAttributesLabel(data) {
        // Rollable attributes
        for (let [a, attribute] of Object.entries(data.actor.data.data.attributes.rollable)) {
            console.log(`${a} : ${data.config.rollableCharacteristic[a]}`);
            attribute.label = data.config.rollableCharacteristic[a];
        }
    }
}