export default class WjdrActor extends Actor {
    
    prepareData() {
        super.prepareData();
        const actorData = this;
        const data = actorData.system;
        const flags = actorData.flags;

        this.setAttributesLabel(data);
        if (actorData.type === 'character') this.calculateDerivedValues(data);

        this.setReductionDamage(data);

        // Compute encumbrance
        this.setEncumbrance(actorData);
    }

    calculateDerivedValues(data) {
        data.attributes.sb = Math.floor(data.attributes.rollable["s"]["endValue"] / 10);
        data.attributes.tb = Math.floor(data.attributes.rollable["t"]["endValue"] / 10);
    }

    setEncumbrance(actorData) {
        const data = actorData.system;
        data.maxEncumbrance = data.attributes.rollable["s"]["endValue"] * 10;
        if (data.race == 'dwarf') data.maxEncumbrance *= 2;
        else if (data.race == 'horse') data.maxEncumbrance *= 3;

        data.encumbrance = 0;  
        
        // Handle money encumbrance
        let numberOfCoins = 0;
        for (let [coin, number] of Object.entries(data.money)) numberOfCoins += number;
        
        while(numberOfCoins >= 50) {
            data.encumbrance += 5;
            numberOfCoins -= 50;
        }

        // Handle equipement encumbrance
        actorData.items.forEach(element => {
            data.encumbrance += element.data.data.weight;
        });

        // Applying malus to Movement if encumbrance for every 50 excedent encumbrance points 
        let tempEncumbrance = data.encumbrance;
        while (tempEncumbrance >= data.maxEncumbrance + 50 && data.attributes.nonUpgradable.m >= 1) {
            data.attributes.nonUpgradable.m -= 1;
            tempEncumbrance -= 50;
        }
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