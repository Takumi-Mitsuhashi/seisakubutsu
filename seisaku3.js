//ヘッダーメニュー (PC版)
const tab = document.querySelector('.tab-wrapper');
const tablist = document.getElementById('tablist');

tab.addEventListener('mouseenter', () => {
    tablist.hidden = false;
});

tab.addEventListener('mouseleave', () => {
    tablist.hidden = true;
});

//ヘッダーメニュー (スマホ版)
const menubtn1 = document.querySelector(`.img3`);
const menubtn2 = document.querySelector(`.img2`); 
const menu = document.querySelector(`.menu`);

menubtn1.addEventListener(`click`, () => {
    menu.classList.remove(`hidden`);
    document.body.classList.add(`nonscroll`);
});

menubtn2.addEventListener(`click`, () => {
    menu.classList.add(`hidden`);
    document.body.classList.remove(`nonscroll`);
});

//目次の非表示トグル
const hide = document.querySelector(`#hide`);
const indexlist = document.getElementById(`indexlist`);

hide.addEventListener(`click`, (e) => {
    e.preventDefault();
    indexlist.classList.toggle(`hidden`);

    if (hide.textContent === `[非表示]`) {
        hide.textContent = `[表示]`;
    } else {
        hide.textContent = `[非表示]`;
    }
});