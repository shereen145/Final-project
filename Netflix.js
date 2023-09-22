const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// select tab content Item
function selectItem(e){
    removeBorder();
    removeshow();
    //add border to current tab
    this.classlist.add('tab-border');
    //Grab content item from DOM
    const tabContentItems =document.querySelector('#${this.id}-content');
    // add show class
    tabContentItems.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item=> item.classList.remove('tab-border'))
}

function removeshow(){
    tabContentItems.forEach(item=> item.classList.remove('show'))
}
// listen to tab click
tabContentItems.forEach(item=> item.addEventListener('click,selectItem'))


