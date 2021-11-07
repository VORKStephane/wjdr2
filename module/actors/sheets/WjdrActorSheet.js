export default class WjdrActorSheet extends ActorSheet {
    get template() {
        return `./systems/wjdr2/templates/actors/${this.actor.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.wjdr2;        

        return data;
    }
}