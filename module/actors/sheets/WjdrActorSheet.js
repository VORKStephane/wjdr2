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
        data.talents = this.getItemBasedOnType(data, 'talent');
        data.skills = this.getItemBasedOnType(data, 'skill');
        data.armors = this.getItemBasedOnType(data, 'armor');
        data.weapons = this.getItemBasedOnType(data, 'weapon');
        //data.leftWeapon
        //data.rightWeapon
        data.mutations = this.getItemBasedOnType(data, 'mutation');
        data.madness = this.getItemBasedOnType(data, 'madness');

        return data;
    }

    activateListeners(html) {
        html.find(".item-delete").click(this.onDeleteItem.bind(this));
        super.activateListeners(html);
    }

    onDeleteItem(event) {
        event.preventDefault();
        let itemId = event.currentTarget.closest(".item").dataset.itemId;
        let item = this.actor.items.get(itemId);
        if ( item ) return item.delete();
    }

    getItemBasedOnType(data, itemType) {
        return data.items.filter(function(item) {
            return item.type == itemType;
        });
    }
}