export default class WjdrItem extends Item {
    
    prepareData() {
        super.prepareData();

        const data = this.data;
        const actorData = this.actor ? this.actor.data : {};
        const itemData = data.data;

        if (data.type == 'armor') this.setArmorData(itemData);
    } 

    getArmorProtectionBasedOnMaterial(material) {
        switch (material) {
            case "leather" : return 1;
            case "studdedLeather" : return 1;
            case "chain" : return 2;
            case "scale" : return 3;
            case "plate" : return 2;
            case "ithilmar" : return 3;
            case "gromril" : return 3;
            default : return -1;
        }
    }

    getArmorCategoryBasedOnMaterial(material) {
        switch (material) {
            case "leather" : return "light";
            case "studdedLeather" : return "light";
            case "chain" : return "medium";
            case "scale" : return "medium";
            case "plate" : return "heavy";
            case "ithilmar" : return "heavy";
            case "gromril" : return "heavy";
            default : return "unknown";
        }
    }

    setArmorData(armorData) {
        // Set armor protection
        armorData.protectionValue = this.getArmorProtectionBasedOnMaterial(armorData.material);
        armorData.category = this.getArmorCategoryBasedOnMaterial(armorData.material);
        armorData.categoryLabel = "wjdr2.label.armor." + armorData.category;
    }
}