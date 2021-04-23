import WjdrItemSheet from "./templates/sheets/WjdrItemSheet.js";
import WjdrItem from "./module/WjdrItem.js";
import WjdrActorSheet from "./templates/sheets/WjdrActorSheet.js";
import WjdrActor from "./module/WjdrActor.js";
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
	CONFIG.Actor.entityClass = WjdrActor;
	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("wjdr2", WjdrActorSheet, { makeDefault : true });
	console.log("Default Actor sheets have been invalidated and replaced by actor sheets from WJDR2 sytem");

	// Item sheets
	// CONFIG.Item.entityClass = WjdrItem;
	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("wjdr2", WjdrItemSheet, { makeDefault : true });
	console.log("Default Item sheets have been invalidated and replaced by item sheets from WJDR2 sytem");
}