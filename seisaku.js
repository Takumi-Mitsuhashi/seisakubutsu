//ヘッダーメニュー
const tab = document.querySelector('.tab-wrapper');
const tablist = document.getElementById('tablist');

tab.addEventListener('mouseenter', () => {
    tablist.hidden = false;
});

tab.addEventListener('mouseleave', () => {
    tablist.hidden = true;
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


