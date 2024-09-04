//Tabs

const  tabsBtns = document.querySelectorAll('.tabs__nav button');
const tabsItems = document.querySelectorAll('.tabs__item');
const hideTabsItems = () => {
    tabsBtns.forEach(tabBtn => tabBtn.classList.remove('active'));
    tabsItems.forEach(tabItem => tabItem.classList.add('hide'));
}
const showActiveTabsItem = (index) => {
    hideTabsItems();
    tabsBtns[index].classList.add('active');
    tabsItems[index].classList.remove('hide');
}

hideTabsItems();
tabsBtns.forEach((tabBtn, index) => tabBtn.addEventListener('click', (event) => {
    event.preventDefault();
    showActiveTabsItem(index);
}))

//Navigation

const navBtns = document.querySelectorAll('.header__nav a')
console.log(navBtns);
navBtns.forEach(navBtn => {
    navBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const id = navBtn.getAttribute('href');
        const element = document.querySelector(id);
        console.log(id, element)
        window.scroll({
            top: element.offsetTop - 68,
            behavior: "smooth",
        })
    })
})