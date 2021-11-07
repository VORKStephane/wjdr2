import WjdrItemSheet from "./module/items/sheets/WjdrItemSheet.js";
import WjdrItem from "./module/items/WjdrItem.js";
import WjdrActorSheet from "./module/actors/sheets/WjdrActorSheet.js";
import WjdrActor from "./module/actors/WjdrActor.js";
import {wjdr2} from "./module/constants.js";
import {preloadHandlebarsTemplates} from "./module/handlebarTemplates.js";

Hooks.once("init", function initGame() {
	init();
	preloadHandlebarsTemplates();
} );

async function init() {
	console.log("Initializing System for Warhammer Roleplay Game - Second Edition");

	CONFIG.wjdr2 = wjdr2;
	replaceSystemSheets();

	console.log("System for Warhammer Roleplay Game - Second Edition initialized");
}

async function replaceSystemSheets() {
	// Actor sheets
	CONFIG.Actor.documentClass = WjdrActor;
	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("wjdr2", WjdrActorSheet, { makeDefault : true });
	console.log("Default Actor sheets have been invalidated and replaced by actor sheets from WJDR2 sytem");

	// Item sheets
	CONFIG.Item.documentClass = WjdrItem;
	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("wjdr2", WjdrItemSheet, { makeDefault : true });
	console.log("Default Item sheets have been invalidated and replaced by item sheets from WJDR2 sytem");
}