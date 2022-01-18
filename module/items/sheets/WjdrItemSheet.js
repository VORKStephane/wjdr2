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
		
		if (magicType != 'none') 
			return data.config.magicSchools[magicType];
		
		data.magicSchools = {};
		for (const cat in data.config.magicSchools) {
			for (const [school, label] of Object.entries(data.config.magicSchools[cat])) {
				 data.magicSchools[school] = label;
			}
		}

		return data.magicSchools;
	}

	activateListeners(html) {
		if (!this.options.editable) return;
		super.activateListeners(html);
	}
}