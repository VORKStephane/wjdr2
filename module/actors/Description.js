import { prepareConfigurationFromArray } from "../DataHandler.js";

const starSign = [
    "wymundTheAnachorite",
	"theBigCross",
	"theLimnersLine",
	"gnuthusTheOx",
	"dragomasTheDrake",
	"theGloaming",
	"grungnisBaldric",
	"mammitTheWise",
	"mummiTheFool", 
    "theTwoBullocks", 
    "theDancer", 
    "theDrummer", 
    "thePiper", 
    "vobistTheFaint", 
    "theBrokenCart", 
    "theGreasedGoat", 
    "rhyasCauldron", 
    "cackelfaxTheCockerel", 
    "theBonesaw", 
    "theWitchlingStar"
];
export const prepareStarSignConfiguration = function() {
    return prepareConfigurationFromArray(starSign, "wjdr2.actors.description.starSign.");
}

const hair = [
	"ashBlond",
	"auburn",
	"black",
	"blond",
	"brown",
	"darkBlond",
	"darkBlue",
	"lightDarkBlond",
	"redhead",
	"silver"
];
export const prepareHairConfiguration = function() {
    return prepareConfigurationFromArray(hair, "wjdr2.actors.description.hair.");
}
