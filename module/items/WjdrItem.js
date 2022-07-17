import { Armor } from "./Armor.js";

export default class WjdrItem extends Item {
    
    prepareData() {
        super.prepareData();

        const data = this.data;
        const actorData = this.actor ? this.actor.data : {};
        const itemData = data.data;

        if (data.type == 'armor') this.setArmorData(itemData);
    }

    setArmorData(armorData) {
        // Set armor protection
        let armor = new Armor(armorData.material, true);
        armorData.protectionValue = armor.getProtection();
        armorData.category = armor.getCategory();
        armorData.categoryLabel = armor.getCategoryLabel();
    }
}