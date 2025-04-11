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

