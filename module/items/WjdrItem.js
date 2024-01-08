import { Armor } from "./Armor.js";
import { MeleeWeapon, weapons } from "./Weapon.js";

export default class WjdrItem extends Item {
    
    prepareData() {
        super.prepareData();

        const data = this;
        const actorData = this.actor ? this.actor.data : {};
        const itemData = data.system;

        if (data.type == 'armor') this.setArmorData(itemData);
        if (data.type == 'weapon') this.setWeaponData(itemData);
    }

    setArmorData(armorData) {
        // Set armor protection
        let armor = new Armor(armorData.material, true);
        armorData.protectionValue = armor.getProtection();
        armorData.category = armor.getCategory();
        armorData.categoryLabel = armor.getCategoryLabel();
    }

    setWeaponData(weaponData) {
        let weapon = new MeleeWeapon(0);
        console.log(weapon);
        console.log(weapon.getAvailability());
        console.log(weapon.getWeaponGroup());
        console.log(weapon.getWeaponGroupObject());
        console.log(weapon.getQualities());
    }
}