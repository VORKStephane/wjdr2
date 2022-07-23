import { prepareRollableCharacteristicsConfiguration } from "./actors/Characteristics.js";
import { prepareEyeColorConfiguration, prepareHairConfiguration, prepareStarSignConfiguration } from "./actors/Description.js";
import { prepareArmorConfiguration, prepareArmorZoneConfiguration } from "./items/Armor.js";
import { prepareAvailabilityConfiguration } from "./items/Item.js";
import { prepareWeaponGroupConfiguration, prepareWeaponQualitiesConfiguration } from "./items/Weapon.js";
import { prepareReferenceBooksConfiguration } from "./Rules.js";

export const wjdr2 = {};

wjdr2.referenceBooks = prepareReferenceBooksConfiguration();

wjdr2.ruleType = {
	"item" : "ITEM.TypeItem",
	"weapon" : "ITEM.TypeWeapon",
	"armor" : "ITEM.TypeArmor",
	"talent" : "ITEM.TypeTalent",
	"skill" : "ITEM.TypeSkill",
	"spell" : "ITEM.TypeSpell",
	"mutation" : "ITEM.TypeMutation",
	"madness" : "ITEM.TypeMadness",
	"career" : "ITEM.TypeCareer",
	"mechanics" : "ITEM.TypeMechanics"
}

wjdr2.rollableCharacteristic = prepareRollableCharacteristicsConfiguration();

wjdr2.nonRollableNonUpgradableCharacteristic = {
	"sb" : "wjdr2.actors.characteristics.sb",
	"tb" : "wjdr2.actors.characteristics.tb",
	"m" : "wjdr2.actors.characteristics.m",
	"ip" : "wjdr2.actors.characteristics.ip",
	"fp" : "wjdr2.actors.characteristics.fp"
};

wjdr2.nonRollableCharacteristic = {
	"a" : "wjdr2.actors.characteristics.a",
	"w" : "wjdr2.actors.characteristics.w",
	"mag" : "wjdr2.actors.characteristics.mag",
};

wjdr2.magicTypes = {
	none : "-",
	petty : "wjdr2.items.spell.magicTypes.petty",
	divine : "wjdr2.items.spell.magicTypes.divine",
	arcane : "wjdr2.items.spell.magicTypes.arcanic",
	dark : "wjdr2.items.spell.magicTypes.darkMagic"
};

wjdr2.magicSchools = {
	petty : {
		divine : "wjdr2.items.spell.schools.pettyDivine",
		occult : "wjdr2.items.spell.schools.pettyArcane",
		hedge : "wjdr2.items.spell.schools.pettyHedge"
	},
	arcane : {
		fire : "wjdr2.items.spell.schools.fire",
		light : "wjdr2.items.spell.schools.light",
		death : "wjdr2.items.spell.schools.death",
		shadow : "wjdr2.items.spell.schools.shadow",
		life : "wjdr2.items.spell.schools.life",
		metal : "wjdr2.items.spell.schools.metal",
		beast : "wjdr2.items.spell.schools.beast",
		sky : "wjdr2.items.spell.schools.heaven"
	},
	divine : {
		manann : "wjdr2.items.spell.schools.manann",
		morr : "wjdr2.items.spell.schools.morr",
		myrmidia : "wjdr2.items.spell.schools.myrmidia",
		ranald : "wjdr2.items.spell.schools.ranald",
		shallya : "wjdr2.items.spell.schools.shallya",
		taalRhya : "wjdr2.items.spell.schools.taalRhya",
		ulric : "wjdr2.items.spell.schools.ulric",
		verena : "wjdr2.items.spell.schools.verena"
	},
	dark : {
		chaos : "wjdr2.items.spell.schools.chaos",
		necromancy : "wjdr2.items.spell.schools.necromancy"	
	}
}

wjdr2.weaponGroups = prepareWeaponGroupConfiguration();

wjdr2.quality = {
	medium : "wjdr2.items.quality.medium",
	mediocre : "wjdr2.items.quality.mediocre",
	good : "wjdr2.items.quality.good",
	outstanding : "wjdr2.items.quality.outstanding"
}

wjdr2.availability = prepareAvailabilityConfiguration();

wjdr2.race = {
	dwarf : "wjdr2.actors.description.race.dwarf",
	elf : "wjdr2.actors.description.race.elf",
	halfling : "wjdr2.actors.description.race.halfling",
	human : "wjdr2.actors.description.race.human"
};

wjdr2.gender = {
	male : "wjdr2.actors.description.gender.male",
	female : "wjdr2.actors.description.gender.female",
	hermaphrodite : "wjdr2.actors.description.gender.hermaphrodite"
}

wjdr2.eye = prepareEyeColorConfiguration();
wjdr2.hair = prepareHairConfiguration();
wjdr2.starSign = prepareStarSignConfiguration();
wjdr2.damageLocation = prepareArmorZoneConfiguration();
wjdr2.armorMaterial = prepareArmorConfiguration();
wjdr2.weaponQualities = prepareWeaponQualitiesConfiguration();

wjdr2.talent = {
	types : {
		none : "wjdr2.label.none",
		rollableAttributeTalent : "wjdr2.label.talent.rollableAttributeTalent"
	}
}