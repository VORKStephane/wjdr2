export default class WjdrActor extends Actor {
    
    prepareData() {
        super.prepareData();
        const actorData = this.data;
        const data = actorData.data;
        const flags = actorData.flags;

        // if (actorData.type === 'pc') this.calculateDerivedValues(actorData);
    }

    calculateDerivedValues(actorData) {
        const data = actorData.data;

        data.basic.attributes.nonRollable.sb = Math.floor(data.s / 10);
        data.basic.attributes.nonRollable.tb = Math.floor(data.t / 10);
        data.basic.attributes.nonRollable.fortune = data.fp;
    }
}