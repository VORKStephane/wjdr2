export const wjdr2 = {};

wjdr2.referenceBooks = {
	"BoD" : "wjdr2.references.BoD",
	"KA" : "wjdr2.references.KA",
	"KoG" : "wjdr2.references.KoG",
	"RIC" : "wjdr2.references.RIC",
	"NDM" : "wjdr2.references.NDM",
	"RC" : "wjdr2.references.RC",
	"SH" : "wjdr2.references.SH",
	"PoD1" : "wjdr2.references.PoD1",
	"PoD2" : "wjdr2.references.PoD2",
	"PoD3" : "wjdr2.references.PoD3",
	"CHR" : "wjdr2.references.CHR",
	"TC" : "wjdr2.references.TC",
	"RS" : "wjdr2.references.RS",
	"TS" : "wjdr2.references.TS",
	"TT" : "wjdr2.references.TT",
	"TiT" : "wjdr2.references.TiT",
	"SoE" : "wjdr2.references.SoE",
	"OWA" : "wjdr2.references.OWA",
	"OWB" : "wjdr2.references.OWB",
	"C" : "wjdr2.references.C",
	"WJDR" : "wjdr2.references.WJDR"
};

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

wjdr2.rollableCharacteristic = {
	"ws" : "wjdr2.actors.characteristics.ws",
	"bs" : "wjdr2.actors.characteristics.bs",
	"s" : "wjdr2.actors.characteristics.s",
	"t" : "wjdr2.actors.characteristics.t",
	"ag" : "wjdr2.actors.characteristics.ag",
	"int" : "wjdr2.actors.characteristics.int",
	"wp" : "wjdr2.actors.characteristics.wp",
	"fel" : "wjdr2.actors.characteristics.fel"
};

wjdr2.nonRollableCharacteristic = {
	"a" : "wjdr2.actors.characteristics.a",
	"w" : "wjdr2.actors.characteristics.w",
	"sb" : "wjdr2.actors.characteristics.sb",
	"tb" : "wjdr2.actors.characteristics.tb",
	"m" : "wjdr2.actors.characteristics.m",
	"mag" : "wjdr2.actors.characteristics.mag",
	"ip" : "wjdr2.actors.characteristics.ip",
	"fp" : "wjdr2.actors.characteristics.fp"
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

wjdr2.weaponGroups = {
    none : "wjdr2.items.weapon.wGroup.none",
	crossbows : "wjdr2.items.weapon.wGroup.crossbows",
	longBows : "wjdr2.items.weapon.wGroup.longBows",
	heavy : "wjdr2.items.weapon.wGroup.heavy",
	powder : "wjdr2.items.weapon.wGroup.powder",
	cavalry : "wjdr2.items.weapon.wGroup.cavalry",
	throwing : "wjdr2.items.weapon.wGroup.throwing",
	parying : "wjdr2.items.weapon.wGroup.parying",
	fencing : "wjdr2.items.weapon.wGroup.fencing",
	mechanical : "wjdr2.items.weapon.wGroup.mechanical",
	stunning : "wjdr2.items.weapon.wGroup.stunning",
	flail : "wjdr2.items.weapon.wGroup.flail",
	rockThrowing : "wjdr2.items.weapon.wGroup.rockThrowing"
};

wjdr2.quality = {
	medium : "wjdr2.items.quality.medium",
	mediocre : "wjdr2.items.quality.mediocre",
	good : "wjdr2.items.quality.good",
	outstanding : "wjdr2.items.quality.outstanding"
}

wjdr2.rarity = {
    none : "wjdr2.items.rarity.none",
    mainstream : "wjdr2.items.rarity.mainstream",
	veryOrdinary : "wjdr2.items.rarity.veryOrdinary", 
    prettyOrdinary : "wjdr2.items.rarity.prettyOrdinary", 
    ordinary : "wjdr2.items.rarity.ordinary", 
    unusual : "wjdr2.items.rarity.unusual", 
    veryRare : "wjdr2.items.rarity.veryRare", 
    prettyRare : "wjdr2.items.rarity.prettyRare", 
    rare : "wjdr2.items.rarity.rare" 
};

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

wjdr2.eye = {
	black : "wjdr2.actors.description.eye.black",
	blue : "wjdr2.actors.description.eye.blue",
	brown : "wjdr2.actors.description.eye.brown",
	cooper : "wjdr2.actors.description.eye.cooper",
	darkBrown : "wjdr2.actors.description.eye.darkBrown",
	grayBlue : "wjdr2.actors.description.eye.grayBlue",
	green : "wjdr2.actors.description.eye.green",
	hazel : "wjdr2.actors.description.eye.hazel",
	lightBrown : "wjdr2.actors.description.eye.lightBrown",
	lightGray : "wjdr2.actors.description.eye.lightGray",
	purple : "wjdr2.actors.description.eye.purple",
	silver : "wjdr2.actors.description.eye.silver"
};

wjdr2.hair = {
	ashBlond : "wjdr2.actors.description.hair.ashBlond",
	auburn : "wjdr2.actors.description.hair.auburn",
	black : "wjdr2.actors.description.hair.black",
	blond : "wjdr2.actors.description.hair.blond",
	brown : "wjdr2.actors.description.hair.brown",
	darkBlond : "wjdr2.actors.description.hair.darkBlond",
	darkBlue : "wjdr2.actors.description.hair.darkBlue",
	lightDarkBlond : "wjdr2.actors.description.hair.lightDarkBlond",
	redhead : "wjdr2.actors.description.hair.redhead",
	silver : "wjdr2.actors.description.hair.silver",
};

wjdr2.damageLocation = {
	head : "wjdr2.actors.damageLocation.head",
	body : "wjdr2.actors.damageLocation.body",
	leftArm : "wjdr2.actors.damageLocation.leftArm",
	rightArm : "wjdr2.actors.damageLocation.rightArm",
	leftLeg : "wjdr2.actors.damageLocation.leftLeg",
	rightLeg : "wjdr2.actors.damageLocation.rightLeg"
}