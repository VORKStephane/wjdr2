async function emptyCombo(selectEl) {
    selectEl.options.length = 0;
    return selectEl;
}
  
async function populateCombo(selectEl, items) {
    return appendChildren(selectEl, items.map(item => new Option(item, item)));
}
  
async function appendChildren(el, children) {
    children.forEach(child => el.appendChild(child));
    return el;
}

export async function replaceOptionList(toReplace, list) {
    populateCombo(emptyCombo(toReplace), list);
}