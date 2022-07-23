import { prepareConfiguration, prepareConfigurationFromArray } from "./DataHandler.js";

const referenceBooks = [
	"BoD", "KA", "KoG", "RIC", "NDM",
	"RC", "SH", "PoD1", "PoD2", "PoD3",
	"CHR", "TC", "RS", "TS", "TT", "TiT",
	"SoE", "OWA", "OWB", "C", "WJDR"
];

export const prepareReferenceBooksConfiguration = function() {
    return prepareConfigurationFromArray(referenceBooks, "wjdr2.references.");
}