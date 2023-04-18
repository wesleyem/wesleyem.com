/**
 *
 * @param {Selectors} el A String containing one or more selectors to match against.
 * @param {Boolean} all Default is false. If true will use document.querySelectorAll otherwise will use document.querySelector
 * @returns Returns a static NodeList representing a list or Element that matches the specified {el}
 */
const selectDOM = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

/**
 *
 * @param {bool} mobileNavActiveState Bool value for the state of the mobile nav flyout
 * @param {string} classList List of classes given for toggling certain ones based on the state of the mobile navigation class
 * @returns modified classList that toggles bi-list class with bi-x class
 */

const mobileNavClassListToggle = (mobileNavActiveState, classList) => {
  if (mobileNavActiveState) {
    return classList.replace("bi-list", "bi-x");
  } else {
    return classList.replace("bi-x", "bi-list");
  }
};

export { selectDOM, mobileNavClassListToggle };
// module.exports = { selectDOM, mobileNavClassListToggle };
