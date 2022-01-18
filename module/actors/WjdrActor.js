export default class WjdrActor extends Actor {
    
    prepareData() {
        super.prepareData();
        const actorData = this.data;
        const data = actorData.data;
        const flags = actorData.flags;

        this.setAttributesLabel(data);
        // if (actorData.type === 'pc') this.calculateDerivedValues(actorData);
    }

    calculateDerivedValues(actorData) {
        const data = actorData.data;

        data.basic.attributes.nonRollable.sb = Math.floor(data.s / 10);
        data.basic.attributes.nonRollable.tb = Math.floor(data.t / 10);
    }

    /**
     * Set the attributes' label to properly display them in the UI
     * @param {Object} data represents the sheet's data 
     */
     setAttributesLabel(data) {
        for (let [a, attribute] of Object.entries(data.attributes.rollable)) {
            attribute.label = CONFIG.wjdr2.rollableCharacteristic[a];
        }

        for (let [a, attribute] of Object.entries(data.attributes.nonRollable)) {
            attribute.label = CONFIG.wjdr2.nonRollableCharacteristic[a];
        }
    }
}