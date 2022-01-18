// import {
// 	replaceOptionList
// } from "../../module/html-utils.js" ;

export default class WjdrItemSheet extends ItemSheet {
	static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width : 530,
			height : 480,
			classes : ["wjdrv2", "sheet", "item"],
			tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body"}]
        });
    }

	get template() {
		// Template for Item sheet has to be in the same folder
		return `./systems/wjdr2/templates/items/${this.item.data.type}-sheet.html`;
	}

	getData() {
		const data = super.getData();
		data.config = CONFIG.wjdr2;

		if (this.item.data.type == 'spell'){
			data.magicSchools = this.handleSpellSchools(data);
		}

		return data;
	}

	handleSpellSchools(data) {
		let magicType = data.data.data.magicType;
		let prefix = "wjdr2.magicSchools.";
		let magicCategories =  [];
		
		if (magicType == 'none') {
			for (const category in data.config.magicSchools) {
				magicCategories.push(category);
			}			
		}
		else magicCategories.push(magicType);

		data.magicSchools = []
		for (const category of magicCategories) {
			for (const school in data.config.magicSchools[category]) {
				data.magicSchools.push(data.config.magicSchools[category][school]);
			}
		}

		return data.magicSchools;
	}

	activateListeners(html) {
		if (!this.options.editable) return;
		super.activateListeners(html);
	}
}