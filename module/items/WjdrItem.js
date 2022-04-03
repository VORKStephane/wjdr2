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
        switch(armorData.category) {
            case "chain":
            case "plate": armorData.protectionValue = 2;
                break;
            case "leather": 
            default: armorData.protectionValue = 1;
                armorData.category = "leather";
        }
    }
}