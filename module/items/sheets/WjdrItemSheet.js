// import {
// 	replaceOptionList
// } from "../../module/html-utils.js" ;

export default class WjdrItemSheet extends ItemSheet {
	static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width : 530,
			height : 320,
			classes : ["wjdrv2", "sheet", "item"]
        });
    }

	get template() {
		// Template for Item sheet has to be in the same folder
		return `./systems/wjdr2/templates/items/${this.item.data.type}-sheet.html`;
	}

	getData() {
		const data = super.getData();
		data.config = CONFIG.wjdr2;
		return data;
	}

	activateListeners(html) {
		super.activateListeners(html);
		if (!this.options.editable) return;

		// TODO Add Handling of change magic type
		/*html.find('.magicTypeSelect').change(event => {
			const data = this.getData();
			let magicTypeSelectInput = document.getElementsByClassName("magicTypeSelect");
			let magicSchoolSelectInput = document.getElementsByClassName("spellSchoolSelect");

			console.log(`Magic type:${magicTypeSelectInput} / Magic School: ${magicSchoolSelectInput}`);

			switch (magicTypeSelectInput) {
				case data.config.magicTypes.petty:
					replaceOptionList(magicSchoolSelectInput, data.config.pettyMagicSchools);
					break;
				case data.config.magicTypes.divine:
					replaceOptionList(magicSchoolSelectInput, data.config.divineMagicSchools);
					break;
				case data.config.magicTypes.arcanic:
					replaceOptionList(magicSchoolSelectInput, data.config.arcaneMagicSchools);
					break;
				case data.config.magicTypes.darkMagic:
					replaceOptionList(magicSchoolSelectInput, data.config.darkMagicSchools);
					break;
			}
		});*/
	}
}