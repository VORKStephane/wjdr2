/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
    return loadTemplates([
      // Actor Sheet Partials
      "systems/wjdr2/templates/actors/parts/abilities.html",
      "systems/wjdr2/templates/actors/parts/combat.html",
      "systems/wjdr2/templates/actors/parts/inventory.html",
      "systems/wjdr2/templates/actors/parts/spells.html",
      "systems/wjdr2/templates/actors/parts/afflictions.html",
      "systems/wjdr2/templates/actors/parts/description.html",
      "systems/wjdr2/templates/actors/parts/upgrade.html"
    ]);
  };