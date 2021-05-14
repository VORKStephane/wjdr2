/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
    return loadTemplates([
  
      // Shared Partials
  
      // Actor Sheet Partials
      "systems/wjdr2/templates/sheets/actors/parts/abilities.html",
      "systems/wjdr2/templates/sheets/actors/parts/combat.html",
      "systems/wjdr2/templates/sheets/actors/parts/inventory.html",
      "systems/wjdr2/templates/sheets/actors/parts/spells.html",
      "systems/wjdr2/templates/sheets/actors/parts/afflictions.html",
      "systems/wjdr2/templates/sheets/actors/parts/description.html",
      "systems/wjdr2/templates/sheets/actors/parts/upgrade.html"
    ]);
  };