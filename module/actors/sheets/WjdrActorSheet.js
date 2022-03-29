import { wjdr2 } from "../../constants.js";

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
        data.items = this.getItemBasedOnType(data, 'item');
        //data.leftWeapon
        //data.rightWeapon
        data.mutations = this.getItemBasedOnType(data, 'mutation');
        data.madness = this.getItemBasedOnType(data, 'madness');

        return data;
    }

    activateListeners(html) {
        html.find(".item-delete").click(this.onDeleteItem.bind(this));
        html.find(".rollableAttributeButton").click(this.onAttributeRoll.bind(this));
        super.activateListeners(html);
    }

    async onAttributeRoll(event) {
        event.preventDefault();
        const element = event.currentTarget;
        const characteristic = element.dataset.label;
        let label = game.i18n.format(wjdr2.rollableCharacteristic[characteristic]) + " (" + 
            this.actor.data.data.attributes.rollable[characteristic]["endValue"] + ") => ";

        let roll = new Roll("1d100");
        await roll.evaluate({"async":true});
        let result = roll.total <= this.actor.data.data.attributes.rollable[characteristic]["endValue"] ?
            "wjdr2.label.testSucceeded" : 
            "wjdr2.label.testFailed";
        label += game.i18n.format(result).toUpperCase();
        
        roll.toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
            flavor: label
        });

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