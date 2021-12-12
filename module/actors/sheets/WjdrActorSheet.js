export default class WjdrActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            tabs : [{
                navSelector: '.sheet-tabs', 
                contentSelector: '.sheet-body', 
                initial: 'abilities'
            }]
        });
    }

    get template() {
        return `./systems/wjdr2/templates/actors/${this.actor.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.wjdr2;        

        return data;
    }
}