import WjdrItemSheet from "./templates/sheets/WjdrItemSheet.js" ;
import {wjdr2} from "./module/constants.js";

Hooks.once("init", init());

async function init() {
	console.log("Initializing System for Warhammer Roleplay Game - Second Edition");

	CONFIG.wjdr2 = wjdr2;
	replaceSystemSheets();

	console.log("System for Warhammer Roleplay Game - Second Edition initialized");
}

async function replaceSystemSheets() {
	// Actor sheets


	// Item sheets
	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("wjdr2", WjdrItemSheet, { makeDefault : true });
	console.log("Default Item sheets have been invalidated and replaced by item sheets from WJDR2 sytem");
}