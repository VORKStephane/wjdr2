export default class WjdrActor extends Actor {
    
    prepareData() {
        super.prepareData();
        const actorData = this.data;
        const data = actorData.data;
        const flags = actorData.flags;

        this.setAttributesLabel(data);
        if (actorData.type === 'character') this.calculateDerivedValues(data);

        this.setReductionDamage(data);
    }

    calculateDerivedValues(data) {
        // Compute encumbrance
        this.setEncumbrance(data);

        data.attributes.sb = Math.floor(data.attributes.rollable["s"]["endValue"] / 10);
        data.attributes.tb = Math.floor(data.attributes.rollable["t"]["endValue"] / 10);
    }

    setEncumbrance(data) {
        data.encumbrance = data.attributes.rollable["s"]["endValue"] * 10;
        if (data.race == 'dwarf') data.encumbrance *= 2;
        else if (data.race == 'horse') data.encumbrance *= 3;
    }

    setReductionDamage(data) {
        data.bodyLocation = [];

        // Damage reduction via Toughness Bonus
        data.bodyLocation.head = data.attributes.tb;
        data.bodyLocation.body = data.attributes.tb;
        data.bodyLocation.leftLeg = data.attributes.tb;
        data.bodyLocation.rightLeg = data.attributes.tb;
        data.bodyLocation.leftArm = data.attributes.tb;
        data.bodyLocation.rightArm = data.attributes.tb;

        // Damage reduction via armors
    }

    /**
     * Set the attributes' label to properly display them in the UI
     * @param {Object} data represents the sheet's data 
     */
     setAttributesLabel(data) {
        for (let [a, attribute] of Object.entries(data.attributes.rollable)) {
            attribute.label = CONFIG.wjdr2.rollableCharacteristic[a];
            attribute.endValue = attribute.base;
            attribute.endValue += attribute.promotion * 5;
        }

        for (let [a, attribute] of Object.entries(data.attributes.nonRollable)) {
            attribute.label = CONFIG.wjdr2.nonRollableCharacteristic[a];
            attribute.endValue = attribute.base;
            attribute.endValue += attribute.promotion * 1;
        }
    }
}