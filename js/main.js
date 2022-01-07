/** @type HTMLDivElement[] */
const tabItems = document.querySelectorAll('.tab-item')
/** @type HTMLDivElement[] */
const tabContentItems = document.querySelectorAll('.tab-content-item')


function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

/**
 * Select tab content item
 * @param {MouseEvent} e 
 */
function selectItem(e) {
    removeBorder()
    removeShow()
    // Add border to current tab
    this.classList.add('tab-border')
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    // Add show class
    tabContentItem.classList.add('show')
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem))